const express = require('express');
const router = express.Router();    //initalized router for requests 
const employees = require('../tst'); //will use dummy DB instead of actaul DB for now
const path = require('path');   // Import path module

const db = path.resolve(__dirname, '../data/relate.sqlite'); // Retrieve location of database

//will be used for specific searches related to the hardware page


//axios will be used in each router request to preform operations on a database

// TODO: rewrite the routes to retrieve data from the database - Austin

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: db,
    },
    useNullAsDefault: true
});

//search all hardware [intended for main Hardware page]
router.get('/' , (req, res, next) => {
    console.log("Get all software")
    next()
}, (req, res) => {
    res.json({msg : "Get all software"})
});

//search hardware by name
router.get('/:name', (req, res) =>{
    console.log("Gets software with name")

    //preform check to see if name exists in table 
    

    //filter through table contents to display hardware with specified name


});

router.get('/:price', (req, res) =>{
    console.log("Gets software with price")
    
    //filter through table contents to display hardware in decending order from specified price


});




module.exports = router;