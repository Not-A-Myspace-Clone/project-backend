const login = require('./controllers/login');

exports.route = (app) => {
    app.get('/', login.landing);
    app.post('/auth', login.authorize);
    app.get('/home', login.home);
}