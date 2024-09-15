const express = require('express');
const os = require('os');
const cluster = require('cluster');
const PORT = 5000;

const totalCPUs = os.cpus().length;
let count = 0;
if(cluster.isPrimary) {
    console.log("if count: ", count++);
    
    for(let i=0; i<totalCPUs; i++) {
        cluster.fork();
    }
} else {
    console.log("else count: ", count++);
    const app = express();
    app.get("/", (req, res) => {
        res.json({ message: `Express server number: ${process.pid}` });
    });
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    })
}