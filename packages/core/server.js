require('./globals')

const express = require('express');

const engine = require('./engine');

const port = process.env.PORT || 3000

module.exports = () => {
    const server = express()

    server.engine('ejs', engine)

    server.set('views', '.');
    server.set('view engine', 'ejs');

    server.uptime = process.uptime

    server.start = (callback) => {
        server.listen(port, (err) => callback(err, port))
    }

    return server
} 
