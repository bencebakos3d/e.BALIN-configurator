const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const mysqlError = "Something went wrong";

const conn = mysql.createConnection({
    password: '1234',
    host: 'localhost',
    user: 'root',
    database: 'ebalin-configurator'
})

app.use(express.static('public'))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/options', (req, res) => {
    conn.query(`
    SELECT * FROM options`, 
    (err, data) => {
        if(err) {
            console.log(err)
            res.status(500).send(mysqlError)
            return
        }
        res.status(200).json(data)
    })
})