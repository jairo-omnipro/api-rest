const express = require('express');

const app = express();

const PORT     = 3000;
const HOSTNAME = "127.0.0.1"; 

app.get('/', (req, res) => {
    res.send("Texto plano");
});

app.listen(PORT, () => {
    console.log("El servidor esta ON");
});