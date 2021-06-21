const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.port = 8081;
        this.app = express();
        this.personPath = '/api/person';

        this.middleware();

        this.routes();
    }

    middleware() {
        this.app.use(cors());
    }

    routes() {
        this.app.use(personPath, require('../routes/person'))
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}

module.exports = Server;