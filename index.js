var http = require('http');
var calc = require('./calc');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./db');

const app = express();
app.use(express.json()); // To parse this JSON request body, without this req.body is "undefined"

const users = [];

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { username, password: hashedPassword };
        const userData = new User({
            username: username,
            password: hashedPassword
        });
        userData.save().then((savedUser) => {
            console.log("User saved successfully: ", savedUser);
        }).catch((err) => {
            console.error("Error saving user: ", err);
        })
        users.push(user);
        console.log("users: ", users);
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username }, 'secret');
            return res.status(200).json({ token });
        } else {
            return res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).send('Protected route');
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Unauthorized');
    jwt.verify(token, 'secret', (err, user) => {
        if (err) return res.status(403).send('Forbidden');
        req.user = user;
        next();
    });
}
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.write("<h1>Hello World    </h1>");
//     res.end();
// }).listen(8080);

// console.log("add(2,3): ", calc.add(2, 3));
// console.log("sub(3,1): ", calc.sub(3, 1));