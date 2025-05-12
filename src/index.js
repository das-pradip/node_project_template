const express = require('express');

// const { ServerConfig, Logger } = require('./config');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { where } = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes); 

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the seerver on PORT : ${ServerConfig.PORT}`);
    

})