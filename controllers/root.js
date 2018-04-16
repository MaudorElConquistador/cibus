"use strict";
const router = require("express").Router();
const path = require('path');
const body_parser = require('body-parser');

const util = require('../api/util.js');
const data_level = require("../db/data_level.js");

router.use(body_parser.json());
router.use(body_parser.urlencoded({extended: true}));
router.post("/register", (req, res) => {
    const body = req.body;
    const name = body.name.trim();
    const invalid_name = util.validateName(name);
    if (invalid_name)
        return res.render("error", {title: "Error registro", h1: "Error al registrar su nombre de usuario", description: invalid_name});
    const pswd = body.password.trim();
    const invalid_pswd = util.validatePassword(pswd);
    if (invalid_pswd)
        return res.render("error", {title: "Error registro", h1: "Error al registrar su contraseña", description: invalid_pswd});
    const email = body.email.trim();
    const invalid_email = util.validateEmail(email);
    if (invalid_email)
        return res.render("error", {title: "Error registro", h1: "Error al registrar su correo email", description: invalid_email});
    data_level.registerUser(body).then(err => {
        if (err)
            return res.render("error", {title: "Error registro", h1: "Error al registrarle", description: "Ha surgido un error en el servidor al intentar registrarle. Lamentamos las molestias que esto pueda ocasionarle"});
        return res.sendFile("success_register.html", {root: path.join(__dirname, "../public/html")});
    });
});
router.use('/', (req, res) => {
    // res.sendFile("index.html", {root: path.join(__dirname, "../public")});
    res.sendFile("landing_page.html", {root: path.join(__dirname, "../public/html")});
});
module.exports = router;
