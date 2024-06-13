const db = require('../config/dbconnection');
const showallresources = (req,res) => {
    
    db.query('SELECT * FROM resources ', (err, resources) => {
        if (err) {
            console.error('Error fetching resources:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
            res.status(200).send({ resources });
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
const deleteIDresources = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('resources', 'resource_id', id);

        res.status(200).send({ msg: 'Deleted successfully by resource Id' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const deletenotavailableresources = async (req, res) => {
   
    //const id = req.params.id; 
    try {
        await deleteFromTable('resources', 'is_available', 0);

        res.status(200).send({ msg: 'Deleted successfully' });
    } catch (error) {
        console.error('Error deleting resources:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};

const addresources = (req, res) => {

    const { resource_id, owner_id, resource_type, description, quantity, user_id, is_available, fee, money, service } = req.body;
    console.log(req.body);

                     db.query(
                        `INSERT INTO resources (resource_id, owner_id, resource_type, description, quantity, user_id, is_available, fee, money, service) 
                        VALUES (?,?,?,?,?,?,?,?,?,?)`,
                        [req.body.resource_id, req.body.owner_id, req.body.resource_type, req.body.description, req.body.quantity, req.body.user_id, req.body.is_available,req.body.fee, req.body.money, req.body.service],
                     ); res.status(200).send({ msg: 'inserted successfully tp resources table ' });
                     
                            if (err) {
                                return db.rollback(() => {
                                    console.error('Error inserting resources:', err);
                                    return res.status(500).json({ success: false, error: 'Error inserting resources' });
                                });
                            }
                          
};
const updateresources = (req, res) => {
        const id = req.params.id;
        const { owner_id, resource_type, description, quantity, user_id, is_available, fee, money, service  } = req.body;
    
        const searchQuery = 'SELECT * FROM resources WHERE resource_id = ?';
    
        db.query(searchQuery, [id], (err, results) => {
            if (err) {
                console.error('Error searching for resources:', err);
                return res.status(500).json({ success: false, error: 'Internal server error' });
            }
    
            if (results.length === 0) {
                return res.status(404).json({ success: false, error: 'No resources found with this ID' });
            }
    
            const updateQuery = `UPDATE resources SET resource_id = ?, owner_id = ?, resource_type = ?, description = ?, quantity = ?, user_id = ?, is_available = ?, fee = ?, money = ?, service = ?
                WHERE resource_id = ?`;
    
            db.query(
                updateQuery,
                [id, owner_id, resource_type, description, quantity, user_id, is_available, fee, money, service,id],
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

const searchResourcesByIdResources=(req,res)=>{

        const id = req.params.id;
    
        db.query('SELECT * FROM resources WHERE resource_id=?',id,(err, resources) => {
            if (err) {
                return res.status(500).send({ error: 'Internal server error' });
            }
            
    if (resources==""){ res.status(500).send({ error: "no any resources to this  resources id  ! " });}
      else          res.status(200).send({ resources });
           
               
            
        });
    
};
const searchAvailableResources=(req,res)=>{

        //const isavailable = req.params.is_available;
    
        db.query('SELECT * FROM resources WHERE is_available=?',1,(err, resources) => {
            if (err) {
                return res.status(500).send({ error: 'Internal server error' });
            }
            
    if (resources==""){ res.status(500).send({ error: "no any available resources ! " });}
      else          res.status(200).send({ resources });
           
               
            
        });
    
};
    
const buyResourceById = (req, res) => {
      const resourceId = req.params.id;
  
      // Check if the resource exists and has a quantity greater than 0
      db.query('SELECT * FROM resources WHERE resource_id=? AND quantity > 0', [resourceId], (err, resources) => {
          if (err) {
              return res.status(500).send({ error: 'Internal server error' });
          }
  
          if (resources.length === 0) {
              return res.status(400).send({ error: 'Resource not available or does not exist' });
          }
  
          const resource = resources[0];
  
          // Decrement the quantity by 1
          const newQuantity = resource.quantity - 1;
          const isAvailable = newQuantity > 0 ? 1 : 0;
  
          // Update the resource's quantity and is_available status if necessary
          db.query('UPDATE resources SET quantity=?, is_available=? WHERE resource_id=?', [newQuantity, isAvailable, resourceId], (updateErr) => {
              if (updateErr) {
                  return res.status(500).send({ error: 'Internal server error' });
              }
  
              res.status(200).send({ message: 'Resource bought successfully', newQuantity, isAvailable });
          });
      });
};

  

module.exports = {
    showallresources,
    deleteIDresources,
    addresources,
    updateresources,
    searchResourcesByIdResources,
    searchAvailableResources,
    deletenotavailableresources,
    buyResourceById
};