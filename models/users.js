const mysql = require('./connection');

exports.getUser = async (username, password) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM accounts WHERE username = ? AND password = ?`, [username, password]);
    return data;
}
exports.insert = async (user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO user_info SET ?`, user_obj);
    return data;
}

exports.selectById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM user_info WHERE id = ?`, [id]);
    return data[0];
}
exports.update = async (id, user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE user_info SET ? WHERE id = ?`, [user_obj, id]);
    return data;
}