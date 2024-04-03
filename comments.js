// Create web server

// Importing modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Importing comments.js
const comments = require('./comments.js');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// GET request to /comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// POST request to /comments
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    comments.addComment(comment);
    res.json(comments.getComments());
});

// DELETE request to /comments
app.delete('/comments', (req, res) => {
    const { comment } = req.body;
    comments.deleteComment(comment);
    res.json(comments.getComments());
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});