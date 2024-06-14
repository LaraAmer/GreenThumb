const db = require('../config/dbconnection');

const signUp = (req, res) => {
    const { user_id, username, email, password_hash, phone_number } = req.body;
    const verificationToken = randomstring.generate();
    db.query(
        `INSERT INTO users (user_id, username, email, password_hash, role, phone_number, logIn,token) 
         VALUES (?, ?, ?, ?, 'user', ?, '0',?)`,
        [user_id, username, email, password_hash, phone_number,verificationToken],
        (err, results) => {
            if (err) {
                console.error('Error in sign up:', err);
                if (!res.headersSent) {
                    return res.status(500).json({ success: false, error: 'Error in sign up this id or username or Email is used ' });
                }
                return;
            }

            if (!res.headersSent) {
                return res.status(200).send({ msg: 'done sign up plz login :' });
            }
        }
    );
};



module.exports = {
    signUp
};
