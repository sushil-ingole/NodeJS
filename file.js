const fs = require('fs');
const express = require('express');
const app = express();

fs.readFile('calc.js', 'utf8', function (err, data) {
    console.log(data);
});

app.get('/path', (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get('/path/:id', (req, res) => {
    res.send(`<h1>Hello path ${req.params.id}</h1>`);
});

app.get('/path', (req, res) => {
    res.send(`<h1>Hello path query ${req.query.id}</h1>`);
});

app.listen(8080);

// fs.writeFile('calc1.js', 'console.log("Done")', function (err, data) {
//     console.log('Written/Replaced to file');
// });

// fs.unlink('calc1.js', function (err, data) {
//     console.log("Deleted file");
// });