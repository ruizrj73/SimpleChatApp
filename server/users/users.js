const dbconnection = require('../database/db');

const addUser = async ({ id, username, password }) => {
    const users = await getUsers();
    const userExist = users.find((user) => user.username === username && user.password === password);
    
    if(!userExist) {
        dbconnection.query(`INSERT INTO userlist(id,username,password) VALUES ('${id}','${username}','${password}')`);
    } else {
        dbconnection.query(`UPDATE userlist SET id = '${id}' WHERE username = '${username}' AND password = '${password}'`);
    }

    const user = { id, username, password };
    return { user };
}

const getUser = async (id) => {
    const users = await getUsers();
    const user = users.find((user) => user.id === id);
    return user;
}

getUsers = async function() {
    return new Promise((resolve, reject) => {
        dbconnection.query('SELECT * FROM userlist', (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { addUser, getUser };