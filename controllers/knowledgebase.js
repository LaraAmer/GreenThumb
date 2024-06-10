const db = require('../config/dbconnection');


const showallknowledgebase = (req,res) => {
    
    db.query('SELECT * FROM knowledgebase ', (err, knowledgebase) => {
        if (err) {
            console.error('Error fetching knowledgebases:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        // console.log(crops);

            res.status(200).send({ knowledgebase });
       
           
        
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

   
const selectFromTable = (tableName, columns, key, value) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT ${columns} FROM ${tableName} WHERE ${key}=? `, [value], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const delete_knowledgebase_by_guide_id  = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('knowledgebase', 'guide_id', id);

        res.status(200).send({ msg: 'Deleted successfully by  guide id' });
    } catch (error) {
        console.error('Error deleting knowledgebase:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};
const delete_knowledgebase_by_author_id  = async (req, res) => {
   
    const id = req.params.id; 

    try {
       
        await deleteFromTable('knowledgebase', 'author_id ', id);

        res.status(200).send({ msg: 'Deleted successfully by  author id' });
    } catch (error) {
        console.error('Error deleting knowledgebase:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
};

const update_knowledgebase_by_guide_id = (req, res) => {
    const id = req.params.id;
    const { title, content, author_id, youtube_tutorial } = req.body;

    const searchQuery = 'SELECT * FROM knowledgebase WHERE guide_id = ?';

    db.query(searchQuery, [id], (err, results) => {
        if (err) {
            console.error('Error searching for knowledgebase:', err);
            return res.status(500).json({ success: false, error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, error: 'No knowledgebase found with this guide_id' });
        }

        const updateQuery = `UPDATE knowledgebase SET guide_id = ?, title = ?, content = ?, author_id = ?, youtube_tutorial = ?
            WHERE guide_id = ?`;

        db.query(
            updateQuery,
            [ id,title, content, author_id, youtube_tutorial,id],
            (err, result) => {
                if (err) {
                    console.error('Error updating knowledgebase:', err);
                    return res.status(500).json({ success: false, error: 'Error updating knowledgebase' });
                }
                res.status(200).json({ success: true, msg: 'knowledgebase updated successfully' });
            }
        );
    });
};

const add_knowledgebase = (req, res) => {
    const { guide_id, title, content, author_id, youtube_tutorial } = req.body;

    const query = `INSERT INTO knowledgebase (guide_id, title, content, author_id, youtube_tutorial) VALUES (?, ?, ?, ?, ?)`;
    const values = [guide_id, title, content, author_id, youtube_tutorial];

    db.query(query, values, (err, result) => {
        if (err) {
            return res.status(500).send({ msg: 'Database error', error: err });
        }
        res.status(201).send({ msg: 'Knowledge base entry added', data: result });
    });
};
const search_knowledgebase_by_author_id=(req,res)=>{

    const id = req.params.id;

    db.query('SELECT * FROM knowledgebase WHERE author_id  =?',id,(err, knowledgebase) => {
        if (err) {
            // console.error('Error fetching users:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (knowledgebase==""){ res.status(500).send({ error: "no any knowledgebase to this  author id  ! " });}
  else          res.status(200).send({ knowledgebase });
       
           
        
    });

};
const search_knowledgebase_by_title=(req,res)=>{

    const title = req.params.title;

    db.query('SELECT * FROM knowledgebase WHERE title  =?',title,(err, knowledgebase) => {
        if (err) {
            // console.error('Error fetching users:', err);
            return res.status(500).send({ error: 'Internal server error' });
        }
        
if (knowledgebase==""){ res.status(500).send({ error: "no any knowledgebase to this  title  ! " });}
  else          res.status(200).send({ knowledgebase });
       
           
        
    });

};


module.exports = {
    showallknowledgebase,//test pass
    delete_knowledgebase_by_guide_id,//test pass
    delete_knowledgebase_by_author_id,
    update_knowledgebase_by_guide_id,//test pass
    add_knowledgebase,//test pass
    search_knowledgebase_by_author_id,//test pass
    search_knowledgebase_by_title//test pass
};
