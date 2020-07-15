const mysql = require('./connection');

exports.getUser = async (username, password) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM accounts WHERE username = ? AND password = ?`, [username, password]);
    return data;
}

exports.createUser = async (user_obj) => {

}

exports.updateUser = async (user_obj) => {

}