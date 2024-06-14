require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require('./config/dbconnection');

const app = express();
app.use(express.json()); // Parse JSON bodies

const PORT = 8888;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const userRoute = require('./routes/userRoute');
app.use('/APIS', userRoute);

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Index Error";
    res.status(err.statusCode).json({
        message: err.message,
    });
});

const apiKey = process.env.OPENWEATHERMAP_API_KEY;

// دالة لجلب الطقس
async function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving weather data: ${error}`);
        throw error;
    }
}

// نقطة نهاية لجلب الطقس لمدينة معينة
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;

    try {
        const weatherData = await getWeather(city);
        res.json({
            city: city,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve weather data.' });
    }
});

//-----------------------------------------------------------------------------------------------------------------------------------------

const plantIdApiKey = process.env.PLANT_ID_API_KEY;

if (!plantIdApiKey) {
    console.error('PLANT_ID_API_KEY is not set in environment variables.');
    process.exit(1); // إيقاف البرنامج إذا لم يتم تعيين مفتاح API
}

app.use(bodyParser.json());

app.post('/plant-id', async (req, res) => {
    const imageURL = req.body.imageURL;
    const apiUrl = 'https://mushroom.kindwise.com/api/v1/identify';

    if (!imageURL) {
        return res.status(400).json({ message: 'imageURL is required.' });
    }
    try {
        const response = await axios.post(apiUrl, {
            images: [imageURL],
            key: plantIdApiKey,
        });

        res.json(response.data);
    }  catch (error) {
        console.error('Error identifying plant:', error.response ? error.response.data : error.message);
        
        if (error.response) {
            res.status(error.response.status).json({
                message: error.response.data || 'Failed to identify plant.',
            });
        } else {
            res.status(500).json({ message: 'Failed to identify plant.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
