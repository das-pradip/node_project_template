const express = require('express');

// const { ServerConfig, Logger } = require('./config');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { where } = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes); 

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the seerver on PORT : ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server");
    const { City, Airport } = require('./models');
    //const city = await City.findByPk(1);
    // console.log(city);
    // const airport = await Airport.create({name: 'Dumdum Airport', code: 'DUM', cityId: 1})
    // const up = await city.createAirport({name: 'Up Airport', code:'UPP', cityId: 3});
    // const airportsInBlr = await city.getAirports();

    // console.log(airportsInBlr);
    // const city = await City.findByPk(4);
    // await city.createAirport({name: 'Indore airpoet', code: 'IND'});
    await City.destroy({
        where: {
            id: 1
        }
    })

})