const userModel = require('../models/users');

class User {

    constructor(user_obj) {
        this._user = user_obj;
    }

    get id(){
        return this._user.id;
    }

    get name(){
        return this._user.name;
    }

    set name(name){
        this._user.name = name;
    }

    get username(){
        return this._user.username;
    }

    set username(username){
        this._user.username = username;
    }

    get email(){
        return this._user.email;
    }

    set email(email){
        this._user.email = email;
    }
    get bio(){
        return this._user.bio;
    }

    set bio(bio){
        this._user.bio = bio;
    }
    get links(){
        return this._user.links;
    }

    set links(links){
        this._user.links = links;
    }
    get location(){
        return this._user.email;
    }

    set location(location){
        this._user.location = location;
    }
    merge(new_user){
        this._user = {...this._user, ...new_user};
    }

    async insert(){
        const results = await userModel.insert(this._user);
        this._user.id = results.insertId;
    }

    async getById(id){
        this._user = await userModel.selectById(id);
    }

    async update(id){
        await userModel.update(id, this._user);
    }

    async delete(id){
        // delete in db
    }

    getLiteral(){
        return this._user;
    }
}

module.exports = User;
