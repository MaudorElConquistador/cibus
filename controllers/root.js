"use strict";
const router = require("express").Router();
const path = require('path');

router.use('/', (req, res) => {
    // res.sendFile("index.html", {root: path.join(__dirname, "../public")});
    res.sendFile("landing_page.html", {root: path.join(__dirname, "../public/html")});
});

module.exports = router;
