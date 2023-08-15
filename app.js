const express = require('express');
const app = express();

//You can use the static files like .css and .mjs
app.use(express.static('public'));
app.use(express.static("src"));

//Set the template engine ejs
app.set('view engine', 'ejs');

app.use("/", (req, res) => res.render("./pages/index.ejs"));

app.listen(3000);
