const Login = require('../classes/Login');
const path = require('path');

exports.landing = async (req, res) => {
    await req.session.destroy();
	res.sendFile(path.join(__dirname + '/../../project-frontend/views/login.html'));
};

exports.authorize = async (req, res) => {
    const user = new Login(req.body);
    if (user.exists()) {
        const check = await user.verifyUser();
        if (check) {
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