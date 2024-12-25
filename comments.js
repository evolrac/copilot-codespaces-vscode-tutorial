//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create comments array
const comments = [
    { id: 1, author: 'John', text: 'Hello everyone!' },
    { id: 2, author: 'Jane', text: 'Hi there!' },
    { id: 3, author: 'Alice', text: 'Hello world!' }
];

//Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//Get comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found');
    }
    res.json(comment);
});

//Create a comment
app.post('/comments', (req, res) => {
    const comment = {
                id: comments.length + 1,
                author: req.body.author,
                text: req.body.text
            };
            comments.push(comment);
            res.json(comment);
        });