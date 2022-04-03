const express = require('express');
const bodyParsor = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const app = express();
//view engine support
app.use(express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'views'));
hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine','hbs');

app.use(bodyParsor.urlencoded({extended:false}));

app.use(bodyParsor.json());

const indexRoute = require('./routes/index_route');

app.use("heaman-portfolio.herokuapp.com",indexRoute);
app.listen(3000,()=>{
  console.log("Server running at port 3000")
})