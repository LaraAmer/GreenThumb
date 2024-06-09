const db = require('../config/dbconnection');
const showallcrops = (req,res) => {
    
    db.query('SELECT * FROM crops ', (err, crops) => {
        if (err) {
            console.error('Error fetching crops:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        // console.log(crops);

            res.status(200).send({ crops });
       
           
        
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
// const selectFromTable = (tableName, columns, key, value) => {
//     return new Promise((resolve, reject) => {
//         db.query(`SELECT ${columns} FROM ${tableName} WHERE ${key}=? `, [value], (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// };

const deleteIDcrop = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('crops', 'crop_id', id);

        res.status(200).send({ msg: 'Deleted successfully by crop Id' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const deleteCropByUserId = async (req, res) => {
    const id = req.params.id; 
    try { 
        await deleteFromTable('crops', 'user_id', id);
        res.status(200).send({ msg: 'Deleted successfully by user Id' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const deleteCropBygardenId = async (req, res) => {
    const id = req.params.id; 
    try { 
        await deleteFromTable('crops', 'garden_id', id);
        res.status(200).send({ msg: 'Deleted successfully by garden Id' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const addcrop = (req, res) => {

    const { crop_id, user_id, garden_id, plot_id, crop_name,planting_date,harvest_date,Date_of_last_fertilization } = req.body;
    console.log(req.body);

                     db.query(
                        `INSERT INTO crops (crop_id, user_id, garden_id, plot_id, crop_name, planting_date, harvest_date, Date_of_last_fertilization) 
                        VALUES (?,?,?,?,?,?,?,?)`,
                        [req.body.crop_id, req.body.user_id, req.body.garden_id, req.body.plot_id, req.body.crop_name, req.body.planting_date, req.body.harvest_date,req.body.Date_of_last_fertilization],
                     ); res.status(200).send({ msg: 'inserted successfully tp crop table ' });
                     
                            if (err) {
                                return db.rollback(() => {
                                    console.error('Error inserting crop:', err);
                                    return res.status(500).json({ success: false, error: 'Error inserting crop' });
                                });
                            }
                          
    };
const updateCrop = (req, res) => {
    const id = req.params.id;
    const { user_id, garden_id, plot_id, crop_name, planting_date, harvest_date, Date_of_last_fertilization } = req.body;

    const searchQuery = 'SELECT * FROM crops WHERE crop_id = ?';

    db.query(searchQuery, [id], (err, results) => {
        if (err) {
            console.error('Error searching for crop:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'No crop found with this ID' });
        }

        const updateQuery = `UPDATE crops SET user_id = ?, garden_id = ?, plot_id = ?, crop_name = ?, planting_date = ?, harvest_date = ?, Date_of_last_fertilization = ?
            WHERE crop_id = ?`;

        db.query(
            updateQuery,
            [user_id, garden_id, plot_id, crop_name, planting_date, harvest_date, Date_of_last_fertilization, id],
            (err, result) => {
                if (err) {
                    console.error('Error updating crop:', err);
                    return res.status(500).json({ success: false, error: 'Error updating crop' });
                }
                res.status(200).json({ success: true, msg: 'Crop updated successfully' });
            }
        );
    });
};
const searchcropByIdUser=(req,res)=>{

    const id = req.params.id;

    db.query('SELECT * FROM crops WHERE user_id=?',id,(err, users) => {
        if (err) {
            // console.error('Error fetching users:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (users==""){ res.status(500).send({ error: "no any crop to this  user id  ! " });}
  else          res.status(200).send({ users });
       
           
        
    });

};
const searchcropByIdCrop=(req,res)=>{

        const id = req.params.id;

        db.query('SELECT * FROM crops WHERE crop_id=?',id,(err, [users]) => {
            if (err) {
                // console.error('Error fetching users:', err);
                return res.status(500).send({ error: 'Internal server error' });
            }
            
if ([users]==""){ res.status(500).send({ error: "no any crop in this id ! " });}
      else          res.status(200).send({ users });
           
               
            
        });

};
module.exports = {
    showallcrops,
    deleteIDcrop,
    deleteCropByUserId,
    deleteCropBygardenId,
    addcrop,
    updateCrop,
    searchcropByIdCrop,
    searchcropByIdUser
};
