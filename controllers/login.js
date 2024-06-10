const login = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
 
    const providedPassword = req.body.password;
    const username = req.body.username;
    db.query(
        `SELECT * FROM login WHERE username = ?`,
        [username],
        (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).send({ msg: "Database error" });
            }
            if (!result.length) {
                return res.status(401).send({ msg: 'Username or Password is incorrect! Please try again or reset your password.' });
            }

            const storedPassword = result[0].password;
            bcrypt.compare(providedPassword, storedPassword, (err, isMatch) => {
                if (err) {
                    console.error("Error comparing passwords:", err);
                    return res.status(500).send({ msg: "Error comparing passwords" });
                }
                if (isMatch || providedPassword === storedPassword) {
                    db.query(
                        `SELECT user_id FROM login_user WHERE username = ?`,
                        [username],
                        (err, user_idResult) => {
                            if (err) {
                                console.error("Database error:", err);
                                return res.status(500).send({ msg: "Database error" });
                            }
                            if (!user_idResult.length) {
                                return res.status(404).send({ msg: 'user ID  not found.' });
                            }

                            const user_id = user_idResult[0].user_id;
                            db.query(
                                `SELECT messages FROM users WHERE user_id = ?`,
                                [user_id],
                                (err, messagesResult) => {
                                    if (err) {
                                        console.error("Database error:", err);
                                        return res.status(500).send({ msg: "Database error" });
                                    }
                                    const messages = messagesResult[0].messages;
                                    if (messages !== null) {
                                        handleSuccessfulLogin(req, res, result);
                                    } else {
                                        return res.status(401).send({ msg: 'Please verify your email before logging in.' });
                                    }
                                }
                            );
                        }
                    );
                } else {
                    return res.status(401).send({ msg: 'Username or Password is incorrect! Please try again or reset your password.' });
                }
            });
        }
    );
};
