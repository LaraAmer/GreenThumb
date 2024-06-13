const db = require('../config/dbconnection');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; // Ensure you have JWT_SECRET in your environment variables


const login = (req, res) => {
    const { username, password_hash } = req.body;
    const searchQuery = 'SELECT * FROM users WHERE username = ? AND password_hash = ?';

    db.query(searchQuery, [username, password_hash], (err, results) => {
        if (err) {
            console.error('Error while searching for user:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'Username or password is incorrect. Please try again.' });
        }

        const userId = results[0].id;
        const userRole = results[0].role;

        const token = jwt.sign(
            { user_id: userId, role: userRole },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        const updateQuery = 'UPDATE users SET logIn = 1, token = ? WHERE username = ?';

        db.query(updateQuery, [token, username], (err, result) => {
            if (err) {
                console.error('Error updating user during login:', err);
                return res.status(500).json({ success: false, error: 'Error updating user' });
            }

            return res.status(200).send({
                success: true,
                msg: 'You are logged in successfully',
                token,
            });
        });
    });
};

const logout = async (req, res) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(400).json({ error: 'Authorization token is required' });
        }

        const sql = 'UPDATE users SET token = NULL, logIn = 0 WHERE token = ?';

        db.query(sql, [token], (error, results) => {
            if (error) {
                console.error('Error updating user during logout:', error);
                return res.status(500).json({ error: 'Error in logging out' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Invalid token or user not found' });
            }

            console.log('Token removed from the DB');

            return res.status(200).json({
                message: 'Logout successful <3 See you soon ^_^ !'
            });
        });
    } catch (err) {
        console.error('Logout error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login,
    logout
};













