const express = require('express');
const router = express.Router();

const client = require('../db/db');
client.connect()

// Select all users
router.get('/', (req, res) => {
   client.query('SELECT * FROM users ORDER BY id;', (e, result) => {
       if(!e){
           res.send(result.rows);
       } else {
           console.error(e.message);
       }
   })
})

// select user by Id
router.get('/:id', (req, res) => {
    const user_id = req.params.id;
    client.query(`SELECT * FROM users WHERE id = ${user_id}`, (e, result) => {
        if(!e){
            res.send(result.rows);
        } else {
            console.error(e.message);
        }
    })
})

// add a new user
router.post('/new', async (req, res) =>{
    
})

// update a user
router.put('/', (req, res) => {
    
})

// delete a user 
router.delete('/:id', (req, res) => {
    const user_id = req.params.id;
    client.query(`DELETE FROM users WHERE id = ${user_id}`, (e, result) => {
        if(!e){
            res.send(result.rows);
        } else {
            console.error(e.message);
        }
    })
})

module.exports = router;