// import express from 'express';
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/location', (req, res) => {
    res.json({
        formatted_query: 'Seattle, WA, USA',
        latitude: '47.606210',
        longitude: '-122.332071',
    });
});

app.get('*', (req, res) => {
    res.status(404).json
})

app.listen(PORT, () => {console.log('listening on port 3001'); });