const express = require("express");
const WSTServer = class {
    constructor(port) {
        this.port = port;
    }

    startServer(){
        const app = express();

        app.get("/",(req,res) => {
            res.send("hello World!")
        });

        app.listen(this.port,()=> {
            console.log(`Server started on port : ${this.port}`);
        });
    }
}

module.exports = WSTServer;
