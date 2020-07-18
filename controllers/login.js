const Login = require('../classes/Login');
const path = require('path');

exports.landing = async (req, res) => {
	await res.sendFile(path.join(__dirname + '/../../project-frontend/views/login.html'));
};

exports.authorize = async (req, res) => {
    const user = new Login(req.body);
    if (user.exists()) {
        if (await user.verifyUser()) {
            await user.populateUser();
            req.session.loggedin = true;
            req.session.username = user.username;
            res.redirect('/home');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
    } else {
        res.send('Please enter Username and Password!');
		res.end();
    }
};

exports.home = async (req, res) => {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
};

exports.createUser = async (req, res) => {
    await res.sendFile(path.join(__dirname + '/../../project-frontend/views/createuser.html'));
}

exports.createAuth = async (req, res) => {
    const user = new Login(req.body);
    if (user.exists()) {
        if (await user.existingUsername()) {
            res.send('Cannot create user, as username already exists!');
            res.end();
        } else {
            if (await user.existingEmail()) {
                res.send('Cannot create user, as email already exists!');
                res.end(); 
            } else {
                await user.registerUser();
                res.json(user.toLiteral());
            }
        }
    } else {
        res.send('Please enter Username, Email, and Password!');
		res.end();
    }
};

exports.deleteUser = async (req, res) => {
    await user.deleteUser(req.params.id);
};