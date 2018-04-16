module.exports = {
    //returnar un error específico
    registerUser: data => new Promise((resolve, reject) => db.registerUser(data).then(status => resolve(status.bad ? status.description : false)))

};
