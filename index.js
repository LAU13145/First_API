const express = require("express");
const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const auth = require("./routes/auth");
api.use("/auth", auth);

//Middlewares
const middAuth = require("./middlewares/auth");
api.use(middAuth);

//Routes
const USERS = require("./routes/users");
api.use(USERS);

const BOOKS = require("./routes/books");
api.use(BOOKS);

api.listen(90);

console.log("Api funcionando en puerto 90");
