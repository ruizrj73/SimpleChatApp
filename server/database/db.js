const mysql = require('mysql');
const config = require('../config/index');

const dbconnection = mysql.createConnection(config);

dbconnection.connect((error) => {
    if(error) {
        console.log(error);
    }
});

module.exports = dbconnection;