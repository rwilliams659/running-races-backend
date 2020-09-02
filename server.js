const marathons = require('./marathon-data')
const express = require('express');
const app = express(); 
app.use(express.json());
app.set('port', 3002); 

app.locals.title='Top US Marathons'
app.locals.marathons = marathons; 

//Using Express, build a server that holds your data in app.locals. This server should spin up to a port of your choice on localhost and return a greeting message in your terminal when the server is started.