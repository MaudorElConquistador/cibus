"use strict";
const express = require('express');
const http = require('http');
const morgan = require("morgan");
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "production";

const root = require("./controllers/root.js");

app.use(helmet());
app.use(morgan(":status :url :method :response-time ms"));
app.set('views', path.join(__dirname, 'public/ejs'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"));
app.use('/', root);

app.use((req, res) => {
    if (NODE_ENV == "production"){
        console.log("namás mensaje 404");
    } else if (NODE_ENV == "development"){
        console.log("mensaje completo de error");
    }
});

const server = http.createServer(app);
server.listen(PORT, () => console.log("Server listening: "+server.address().address+':'+PORT));

module.exports = app;
