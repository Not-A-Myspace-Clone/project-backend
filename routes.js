const path = require('path')
const fs = require("fs");
const mysql = require("./models/connection");
module.exports = (app) => {

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

    //--------------------------------------  
}
// const products = require('./controllers/users');

// exports.route = (app) => {
//     app.post('/products', products.create);
//     app.get('/products/:id?', products.read);
//     app.patch('/products/:id', products.update);
//     //app.delete('/products/:id', products.delete);
// }
