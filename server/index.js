const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors'); //allows our client to access our server locally

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;
const server = app.listen(port, () => {
    const addr = server.address();
    console.log(`🛸 Server listening at http://localhost:${addr.port}`);
});

// this will be your "database"
var database = [
    {"id": 1, "name": "Milk", "category": "Food"},
    { "id": 2, "name": "Eggs", "category": "Food" },
    { "id": 3, "name": "Blender", "category": "Appliance" },
]

// super simple example - just print Hello World in console
app.get("/example", (req, res, next) => {
    res.json({ "message": "Welcome to your Shopping List!" });
});

// TODO ROUTE #1 - Get all shopping items
// /getAll - returns all the documents in the database
app.get("/getAll", (req, res, next) => {
    res.json(database);
});


// TODO ROUTE #2 - Add a new shopping item
// /add - adds a new document to the database
app.post('/add', (req, res, next) => {
    database.push({id: database.length + 1, ...req.body})
    res.json(database);
})


// TODO ROUTE #3 - Remove an existing shopping item
// /remove - deletes a single document from the database
// app.post('/remove', (req, res, next) => {
//     let idx = database.findIndex((item) => item.name == req.body.existingName)
//     console.log(idx)
//     database.pop({idx, database[idx].name, database[idx].category})
//     res.json(database);
// })


app.delete("/remove", (req, res, next) => {
    let newDatabase = database.filter((item) =>
        item.name != req.body.name 
    )
    database = newDatabase
    res.json(database)
})


// TODO ROUTE #4 - Update an existing shopping item (harder)
// /update - updates (either the name or category of the item) a single document in the database
app.put("/update", (req, res, next) => {
    let idx = database.findIndex((item) => item.name == req.body.existingName)
    console.log(idx)
    database[idx].name = req.body.newName
    database[idx].category = req.body.newCategory
    res.json(database)
})



// TODO ROUTE #5 - Get shopping items that satisfy a condition/filter (harder)
// /getByCat - returns all documents that match a certain category in the database
app.get("/getByCat", (req, res, next) => {
    let filteredDatabase = database.filter((item) => 
        item.category == req.query.category
    )
    res.json(filteredDatabase)
})



module.exports = app;