require('dotenv').config();
const express = require('express');
//const db = require('./config/dbConfig.js')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

const dbCall= require('./dbUtil.js');
dbCall("SELECT 10 FROM PSSAScores;");
/*
dbCall('SELECT 10 FROM PSSAScores;')
.then(function(result) {
    console.log(result);
    */
//});