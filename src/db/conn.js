const mongoose = require("mongoose");

const Database = process.env.DATABASE_PORT

const Curd = mongoose.connect(Database)
    .then(() => {
        console.log("Connection With Database Successfully");
    }).catch((err) => {
        console.log(`Connectio Failed of this error ${err}`);
    })