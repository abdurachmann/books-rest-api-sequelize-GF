const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

require("./routes/books.js")(app);

// create server
const server = app.listen(3000, "127.0.0.1", function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
})