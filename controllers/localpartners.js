const db = require('../config/dbconnection');
const showalllocalpartners = (req,res) => {



    db.query('SELECT * FROM localpartners ', (err, localpartners) => {
        if (err) {
            console.error('Error fetching localpartners:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
            res.status(200).send({ localpartners });
       
           
        
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

const deleteBypartner_id = async (req, res) => {
    if(req.user.role != "owner"){
        return res.json("you are not owner")}
        try {






    const id = req.params.id; 

    try {
       
        await deleteFromTable('localpartners', 'partner_id', id);

        res.status(200).send({ msg: 'Deleted successfully by partner id' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }



} catch (error) {
    console.error('Error ', error);
    res.status(500).json({ success: false, error: 'An error ' });
}
};
const deleteBypartner_name = async (req, res) => {
    if(req.user.role != "owner"){
        return res.json("you are not owner")}
        try {
    const id = req.params.id; 
    try { 
        await deleteFromTable('localpartners', 'name', id);
        res.status(200).send({ msg: 'Deleted successfully by partners name' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }


} catch (error) {
    console.error('Error ', error);
    res.status(500).json({ success: false, error: 'An error ' });
}};


const addlocalpartners = (req, res) => {
    if(req.user.role != "owner"){
                return res.json("you are not owner")}
                try {
          const { partner_id, name, description, website_url, contact_email, owner_id } = req.body;
    const query = "INSERT INTO localpartners (partner_id, name, description, website_url, contact_email, owner_id) VALUES (?, ?, ?, ?, ?, ?)";
  
    db.query(query, [partner_id, name, description, website_url, contact_email, owner_id], (err, result) => {
      if (err) {
        console.error("Database insertion error: ", err);
        if (!res.headersSent) {
          return res.status(500).json({ error: "Database insertion error" });
        }
      } else {
        if (!res.headersSent) {
          return res.status(201).json({ message: "Partner added successfully" });
        }
      }
    });
 

} catch (error) {
    console.error('Error ', error);
    res.status(500).json({ success: false, error: 'An error ' });
}   };
  
const updatelocalpartners = (req, res) => {
    if(req.user.role != "owner"){
        return res.json("you are not owner")}
        try {






const id = req.params.id;
    const {  name, description, website_url, contact_email, owner_id } = req.body;

    const searchQuery = 'SELECT * FROM localpartners WHERE partner_id = ?';

    db.query(searchQuery, [id], (err, results) => {
        if (err) {
            console.error('Error searching for local partner:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'No partner found with this ID' });
        }

        const updateQuery = `UPDATE localpartners SET partner_id = ?, name = ?, description = ?, website_url = ?, contact_email = ?, owner_id = ?
            WHERE partner_id = ?`;

        db.query(
            updateQuery,
            [ id,name, description, website_url, contact_email, owner_id,id],
            (err, result) => {
                if (err) {
                    console.error('Error updating localpartners:', err);
                    return res.status(500).json({ success: false, error: 'Error updating localpartners' });
                }
                res.status(200).json({ success: true, msg: 'localpartners updated successfully' });
            }
        );
    });




} catch (error) {
    console.error('Error ', error);
    res.status(500).json({ success: false, error: 'An error ' });
}};
const searchlocalpartnersByIdpartner=(req,res)=>{

    const id = req.params.id;

    db.query('SELECT * FROM localpartners WHERE partner_id=?',id,(err, users) => {
        if (err) {
            // console.error('Error fetching users:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (users==""){ res.status(500).send({ error: "no any partner to this  user id  ! " });}
  else          res.status(200).send({ users });
       
           
        
    });

};
const searchlocalByEmail=(req,res)=>{

        const contact_email = req.params.contact_email;

        db.query('SELECT * FROM localpartners WHERE contact_email=?',contact_email,(err, [users]) => {
            if (err) {
                // console.error('Error fetching users:', err);
                return res.status(500).send({ error: 'Internal server error' });
            }
            
if ([users]==""){ res.status(500).send({ error: "no any partner in this contact_email ! " });}
      else          res.status(200).send({ users });
           
               
            
        });

};
module.exports = {
    showalllocalpartners,
    searchlocalByEmail,
    searchlocalpartnersByIdpartner,
    updatelocalpartners,
    addlocalpartners,
    deleteBypartner_name,
    deleteBypartner_id,
    
};
