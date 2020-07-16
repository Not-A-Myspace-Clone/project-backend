const users = require('../models/users');

class Login {

    constructor(user_obj) {
        this._item = user_obj;
    }
    
    get id() {
        return this._item.id;
    }

    get username() {
        return this._item.username;
    }

    set username(username) {
        this._item.username = username;
    }

    get password() {
        return this._item.password;
    }

    set password(password) {
        this._item.password = password;
    }

    get email() {
        return this._item.email;
    }

    set email(email) {
        this._item.email = email;
    }

    toLiteral() {
        return this._item;
    }

    exists() {
        return (this._item) ? true : false;
    }

    async verifyUser() {
        const results = await users.getUser(this._item.username, this._item.password);
        return (results.length > 0) ? true : false;
    }

    async populateUser() {
        const result = await users.getUser(this._item.username);
        this._item = result;
    }
    
}

module.exports = Login;

