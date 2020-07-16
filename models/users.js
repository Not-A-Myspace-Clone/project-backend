const mysql = require('./connection');

exports.insert = async (product_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO products SET ?`, product_obj);
    return data;
}

exports.selectById = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM products WHERE id = ?`, [id]);
    return data[0];
}

exports.update = async (id, product_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE products SET ? WHERE id = ?`, [product_obj, id]);
    return data;
}