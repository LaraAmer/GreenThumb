const db = require('../config/dbconnection');
const showallvolunteer = (req,res) => {
    
    db.query('SELECT * FROM volunteer_work ', (err, volunteer) => {
        if (err) {
            console.error('Error fetching volunteer:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
            res.status(200).send({ volunteer });
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
const deleteIDvolunteer = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('volunteer_work', 'Volunteer_id', id);

        res.status(200).send({ msg: 'Deleted successfully by volunteer_work Id' });
    } catch (error) {
        console.error('Error deleting volunteer:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const addvolunteer = (req, res) => {

    const {Volunteer_work_id, Volunteer_work_name, Volunteer_id,garden_id,event_description,event_date } = req.body;
    console.log(req.body);

                     db.query(
                        `INSERT INTO volunteer_work (Volunteer_work_id, Volunteer_work_name, Volunteer_id,garden_id,event_description,event_date) 
                        VALUES (?,?,?,?,?,?)`,
                        [req.body.Volunteer_work_id, req.body.Volunteer_work_name, req.body.Volunteer_id, req.body.garden_id, req.body.event_description, req.body.event_date],
                     ); res.status(200).send({ msg: 'inserted successfully tp volunteer table ' });
                     
                            if (err) {
                                return db.rollback(() => {
                                    console.error('Error inserting volunteer:', err);
                                    return res.status(500).json({ success: false, error: 'Error inserting volunteer' });
                                });
                            }
                          
};
const searchvolunteerById=(req,res)=>{

        const id = req.params.id;
    
        db.query('SELECT * FROM volunteer_work WHERE Volunteer_id=?',id,(err, volunteer) => {
            if (err) {
                return res.status(500).send({ error: 'Internal server error' });
            }
            
    if (volunteer==""){ res.status(500).send({ error: "no any volunteer to this id  ! " });}
      else          res.status(200).send({ volunteer });
           
               
            
        });
    
};
const searchByVolunteer_work_name=(req,res)=>{

    const id = req.params.id;

    db.query('SELECT * FROM volunteer_work WHERE Volunteer_work_name=?',id,(err, volunteer) => {
        if (err) {
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (volunteer==""){ res.status(500).send({ error: "no any volunteer to this id  ! " });}
  else          res.status(200).send({ volunteer });
    });
};
const updatevolunteer = (req, res) => {
    const id = req.params.id;
    const { Volunteer_work_id, Volunteer_work_name,garden_id,event_description,event_date  } = req.body;

    const searchQuery = 'SELECT * FROM volunteer_work WHERE Volunteer_id = ?';

    db.query(searchQuery, [id], (err, results) => {
        if (err) {
            console.error('Error searching for volunteer:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'No volunteer found with this ID' });
        }

        const updateQuery = `UPDATE volunteer_work SET Volunteer_work_id = ?, Volunteer_work_name = ?, Volunteer_id = ?, garden_id = ?, event_description = ?, event_date = ?
            WHERE Volunteer_id = ?`;

        db.query(
            updateQuery,
            [Volunteer_work_id, Volunteer_work_name,id,garden_id,event_description,event_date ,id],
            (err, result) => {
                if (err) {
                    console.error('Error updating resource:', err);
                    return res.status(500).json({ success: false, error: 'Error updating resource' });
                }
                res.status(200).json({ success: true, msg: 'resource updated successfully' });
            }
        );
    });
};
module.exports = {
    showallvolunteer,
    deleteIDvolunteer,
    addvolunteer,
    searchvolunteerById,
    updatevolunteer,
    searchByVolunteer_work_name
};