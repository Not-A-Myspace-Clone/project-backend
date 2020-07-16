const login = require('./controllers/login');
const mysql = require("./models/connection");
module.exports = (app) => {
    app.get('/', login.landing);
    app.post('/auth', login.authorize);
    app.get('/home', login.home);
    app.get("/user", async (request, response) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`SELECT * FROM user_info`);
        response.json(data);
    });
    app.post("/user", async (request, response) => {
        const connection = await mysql.connect();
        const [data] = await connection.query(`INSERT INTO user_info SET ?`, request.body);
        response.json({created: true, ...request.body});

    })
    app.patch("/user/:id", async (request, response) => {
        const connection = await mysql.connect();
        const id = request.params.id
        const [data] = await connection.query(`UPDATE user_info SET ? WHERE id = ?`, [user_obj, id]);
        response.json({updated: true, ...request.body});
        return data;
    }) 
}