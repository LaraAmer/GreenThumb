


const db = require('../config/dbconnection');
const showallgarden = (req,res) => {
    
    db.query('SELECT * FROM gardens ', (err, gardens) => {
        if (err) {
            console.error('Error fetching gardens:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }

            res.status(200).send({ gardens });
       
           
        
    });
}
const deleteFromTable = (tableName, key, value) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM ${tableName} WHERE ${key}=? `, [value], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};



const deleteIDgarden = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('gardens', 'garden_id', id);

        res.status(200).send({ msg: 'Deleted successfully by garden Id' });
    } catch (error) {
        console.error('Error deleting :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};


const addGarden = (req, res) => {

    const {garden_id, name, location, available_plots, sunlight, soil_type } = req.body;
    console.log(req.body);

                     db.query(
                        `INSERT INTO gardens (garden_id, name, location, available_plots, sunlight, soil_type) 
                        VALUES (?,?,?,?,?,?)`,
                        [req.body.garden_id, req.body.name, req.body.location, req.body.available_plots, req.body.sunlight, req.body.soil_type],
                     ); res.status(200).send({ msg: 'inserted successfully tp garden table ' });
                     
                            if (err) {
                                return db.rollback(() => {
                                    console.error('Error inserting garden:', err);
                                    return res.status(500).json({ success: false, error: 'Error inserting garden' });
                                });
                            }
                          
    };

const updateGarden = (req, res) => {
    const id = req.params.id;
    const { name, location, available_plots, sunlight, soil_type } = req.body;
    const searchQuery = 'SELECT * FROM gardens WHERE garden_id = ?';

    db.query(searchQuery, [id], (err, results) => {
        if (err) {
            console.error('Error searching for garden:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'No garden found with this ID' });
        }

        const updateQuery = `UPDATE gardens SET garden_id = ?, name = ?, location = ?, available_plots = ?, sunlight = ?, soil_type = ? where garden_id =?
         `;

        db.query(
            updateQuery,
            [id, name, location, available_plots, sunlight, soil_type,id],
            (err, result) => {
                if (err) {
                    console.error('Error updating garden:', err);
                    return res.status(500).json({ success: false, error: 'Error updating garden' });
                }
                res.status(200).json({ success: true, msg: 'garden updated successfully' });
            }
        );
    });
};
const searchgardenByname=(req,res)=>{

     const name_id = req.params.name;

    db.query('SELECT * FROM gardens WHERE name=?',name_id,(err, {garden}) => {
        if (err) {
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (garden==""){ res.status(500).send({ error: "no any garden to this name  ! " });}
  else          res.status(200).send({ garden });
       
           
        
    });

};
const searchGardenById =(req,res)=>{

        const id = req.params.id;

        db.query('SELECT * FROM gardens WHERE garden_id=?',id,(err, [garden]) => {
            if (err) {
                return res.status(500).send({ error: 'Internal server error' });
            }
            
if ([garden]==""){ res.status(500).send({ error: "no any garden in this id ! " });}
      else          res.status(200).send({ garden });
           
               
            
        });

};

const searchgardenBylocation =(req,res)=>{

    const location_id = req.params.location;

    db.query('SELECT * FROM gardens WHERE location=?',location_id,(err, [garden]) => {
        if (err) {
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if ([garden]==""){ res.status(500).send({ error: "no any garden in this location ! " });}
  else          res.status(200).send({ garden });
       
           
        
    });

};

const showallPlots = (req,res) => {
    
    db.query('SELECT * FROM plots ', (err, plots) => {
        if (err) {
            console.error('Error fetching plots:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }

            res.status(200).send({ plots });
       
           
        
    });
};


const deleteIDplots = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('plots', 'plot_id', id);

        res.status(200).send({ msg: 'Deleted successfully by plot Id' });
    } catch (error) {
        console.error('Error deleting :', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};



const addPlots = (req, res) => {

    const {plot_id, garden_id, plot_number, is_available } = req.body;
    console.log(req.body);

                     db.query(
                        `INSERT INTO plots (plot_id, garden_id, plot_number, is_available) 
                        VALUES (?,?,?,?)`,
                        [ req.body.plot_id, req.body.garden_id, req.body.plot_number, req.body.is_available],
                     ); res.status(200).send({ msg: 'inserted successfully tp plot table ' });
                     
                            if (err) {
                                return db.rollback(() => {
                                    console.error('Error inserting plot:', err);
                                    return res.status(500).json({ success: false, error: 'Error inserting plot' });
                                });
                            }
                          
    };

    const updatePlots = (req, res) => {
        const id = req.params.id;
        const { plot_id, garden_id, plot_number, is_available } = req.body;
        const searchQuery = 'SELECT * FROM plots WHERE plot_id = ?';
    
        db.query(searchQuery, [id], (err, results) => {
            if (err) {
                console.error('Error searching for polt:', err);
                return res.status(500).json({ success: false, error: 'Internal server error' });
            }
    
            if (results.length === 0) {
                return res.status(404).json({ success: false, error: 'No plot found with this ID' });
            }
    
            const updateQuery = `UPDATE plots SET plot_id = ?, garden_id = ?, plot_number = ?, is_available = ? where plot_id =?
             `;
    
            db.query(
                updateQuery,
                [ plot_id, garden_id,  plot_number, is_available,id],
                (err, result) => {
                    if (err) {
                        console.error('Error updating plot:', err);
                        return res.status(500).json({ success: false, error: 'Error updating plot' });
                    }
                    res.status(200).json({ success: true, msg: 'plot updated successfully' });
                }
            );
        });
    };

const searchPoltById =(req,res)=>{

        const id = req.params.id;

        db.query('SELECT * FROM plots WHERE plot_id=?',id,(err, [plots]) => {
            if (err) {
                return res.status(500).send({ error: 'Internal server error' });
            }
            
if ([plots]==""){ res.status(500).send({ error: "no any plot in this id ! " });}
      else          res.status(200).send({ plots });
           
               
            
        });

};

module.exports = {
    showallgarden,
    deleteIDgarden,
    addGarden,
    updateGarden,
    searchGardenById,
    searchgardenByname,
    searchgardenBylocation,

    showallPlots,
    deleteIDplots,
    addPlots,
    updatePlots,
    searchPoltById
};

