const login = require('./controllers/login');
const news = require('./news');
const users = require('./controllers/users');

module.exports = (app) => {
    app.get('/news', news.getNews);
    app.get('/login', login.landing);
    app.post('/login/auth', login.authorize);
    app.get('/home', login.home);
    app.get('/create', login.createUser);
    app.post('/create/verify', login.createAuth);
    app.delete('/delete/:id', login.deleteUser);
    app.post("/user", users.create);
    app.get("/user/:id", users.read);
    app.patch("/user/:id", users.update);
}