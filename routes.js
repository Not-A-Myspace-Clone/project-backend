const login = require('./controllers/login');
const mysql = require("./models/connection");
const users = require('./controllers/users');

module.exports = (app) => {
    app.get('/', login.landing);
    app.post('/auth', login.authorize);
    app.get('/home', login.home);
    app.post("/user", users.create);
    app.get("/user/:id", users.read);
    app.patch("/user/:id", users.update);
}