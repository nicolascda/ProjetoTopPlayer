// const express = require("express");
// const dotenv = require("dotenv");

import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";

const PORT = process.env.PORT || 5000;


app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando na porta ${PORT} http://localhost:${PORT}`)
});