const dbconnection = require('../database/db');

const saveMessage = async (username, message) => {
    dbconnection.query(`INSERT INTO messages(message,sender) VALUES('${message}','${username}')`);
}

const getMessages = async () => {
    return new Promise((resolve, reject) => {
        dbconnection.query('SELECT * FROM messages', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { saveMessage, getMessages };