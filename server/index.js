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




// TODO ROUTE #2 - Add a new shopping item




// TODO ROUTE #3 - Remove an existing shopping item




// TODO ROUTE #4 - Update an existing shopping item (harder)




// TODO ROUTE #5 - Get shopping items that satisfy a condition/filter (harder)





module.exports = app;