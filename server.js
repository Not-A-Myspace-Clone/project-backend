require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

require("./routes")(app);

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));

// JB TEST