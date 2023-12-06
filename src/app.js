const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

const public_directory = path.join(__dirname, "../public");
const files_directory = path.join(__dirname, "../public/files");
const views_directory = path.join(__dirname, "../templates/views");

const configs = require(path.join(__dirname, "/tools/configs.js"));

app.set('view engine', '.hbs');
app.set('views', views_directory);

app.use(express.static(public_directory));
app.use('/file', express.static(files_directory));

app.get('/', (req, res) => {
	res.render('index');
})

const port = configs.port;
app.listen(port, () => {
	console.log(`domainaddy.com is running on port ${port}!`);
})
