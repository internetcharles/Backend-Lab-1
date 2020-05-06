// import express from 'express';
const dotenv = require('dotenv');

dotenv.config();
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    console.log('anything');
    res.json({
        hello: 'location'
    });
});

app.get('*', (req, res) => {
    res.status(404).json
})

app.listen(PORT, () => {console.log('listening on port 3001'); });