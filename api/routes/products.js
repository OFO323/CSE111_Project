const express = require('express');
const router = express.Router();    //initalized router for requests 
const employees = require('../tst'); //will use dummy DB instead of actaul DB for now
const path = require('path');   // Import path module

const db = path.resolve(__dirname, '../data/relate.sqlite'); // Retrieve location of database

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: db,
    },
    useNullAsDefault: true
});
//new route for update table in the main page
router.get('/updates', (req, res) => {
    knex
        .select('*')
        .from('prodUpdates')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res,json({msg : `Error retrieving products: ${err}` })
        })
});

//new route for update table in the main page
router.get('/updates2', (req, res) => {
    knex
        .select('*')
        .from('prodUpdates')
        .where('prod_amount', '>', 0)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res,json({msg : `Error retrieving products: ${err}` })
        })
});


//query for table with base price displayed only


//query for table that displays cheapest prices grouped by store


router.get('/', (req, res) => {
    console.log("Get all products")
    
    knex
        .select('*')        // Retrieve all items
        .from('products')   // Retreive from products table
        .then(userData => {
            // Send products extracted from database in response
            res.json(userData)
        })
        .catch(err => {
            res.json({msg: `Error retrieving products: ${err}`})
        })
});

// Get only a specific product [done]
router.get('/:name', (req, res) => {
    console.log("Name is " + req.params.name)   // Check back on this one later
    const pName = req.params.name;
    //const prodName  = req.params.p_prodName
    knex
        .select('s_price', 's_releasedate' )        // Retrieve all items
        .from('products')   // Retreive from products table
        .where('s_prodName', 'like', `%${pName}%`)
        .then(userData => {
            // Send products extracted from database in response
            res.json(userData)
        })
        .catch(err => {
            res.json({msg: `Error retrieving product name: ${err}`})
        })
});

router.get('/base/:name', (req, res) => {
    console.log("Name is " + req.params.name)   // Check back on this one later
    const pName = req.params.name;
    //const prodName  = req.params.p_prodName
    knex
        .max('p_price as max')
        .select('p_releasedate')        // Retrieve all items
        .from('products')   // Retreive from products table
        .where('p_prodName', 'like', `%${pName}%`)
        .then(userData => {
            // Send products extracted from database in response
            res.json(userData)
        })
        .catch(err => {
            res.json({msg: `Error retrieving product name: ${err}`})
        })
});


// SELECT
// locations.l_cityName, p_storeName, p_prodName, MIN(p_price)
// FROM products, locations
// WHERE p_prodName = 'Animal Crossing: New Horizons'	AND
// p_storeName = 'Target' AND
// l_cityID = p_cityNum;

router.get('/:store/:prod', (req, res) => {
    const store = req.params.store;
    const prod = req.params.prod;

    knex    
        .select('p_storeName', 'p_storeNum')
        .min('p_price as min')
        .from('products')
        .where('p_prodName', 'LIKE', `${prod}`)
        .andWhere('p_storeName', 'LIKE', `${store}`)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({msg: `Error retrieving product name: ${err}`})
        })
});



//post request for adding content to list
router.post('/', (req, res) => {
    const newEmpl = {
        id : req.params.id,
        name : req.params.name,
    }

    if(!newEmpl.id || !newEmpl.name) { //check if either value is missing 
        return res.status(400).json({msg : "Include id and name"}); //error message
    }

    employees.push(newEmpl); //if checks passed, add to array

    console.log(`Employee ${req.params.name} has been added`); //success message

    res.json(employees); //display all contents after addition

});

module.exports = router;
