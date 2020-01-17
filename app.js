
// Dependencies
const express = require("express");

const path = require("path");



// Set up express app
const app = express();

const PORT = 419;

// Sets up the app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Router
require("./htmlRoutes")(app);
// require("./apiRoutes")(app);

app.listen(PORT, function() {
    console.log("server listening on : http://localhost:" + PORT);
}); 