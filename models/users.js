const mysql = require('./connection');

exports.getUser = async (username, password) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM accounts WHERE username = ? AND password = ?`, [username, password]);
    return data;
}

exports.getUserByName = async (username) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM accounts WHERE username = ?`, [username]);
    return data;
}

exports.getUserByEmail = async (email) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM accounts WHERE email = ?`, [email]);
    return data;
}

exports.insertUser = async (user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO accounts SET ?`, user_obj);
    return data;
}

exports.updateUser = async (id, user_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE accounts SET ? WHERE id = ?`, [user_obj, id]);
    return data;
}

exports.deleteUser = async (id) => {
    const connection = await mysql.connect();
    await connection.query(`DELETE FROM accounts WHERE id = ?;`, [id]);
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