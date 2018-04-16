const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "admin_cibus",
    password: "toor",
    database: "cibus"
});
function getIdMac(mac){
    return new Promise((resolve, reject) => con.query("SELECT id_mac FROM raspberrymacs WHERE mac_mac=?", [mac], (err, row) => resolve(err ? false : row.id)));
}
module.exports = {
    registerUser: user => new Promise((resolve, reject) => {
        //USAR PROCEDURES
        //USAR O EL CIPHER O BCRYPT
        if (!user.mac)
            con.query("INSERT INTO account(nme_usa, psw_usa) VALUES (?, ?)", [user.name, user.password], (err, rows_affected) => {
                if (err) resolve({bad: true, description: "Ha ocurrido un error al registrarle"});
                resolve({bad: false});
            });
        else
            getIdMac(user.mac).then(id => {
                if (!id) resolve({bad: true, description: "Tuvimos problemas con la MAC, verifica que sea válida"});
                con.query("INSERT INTO account(nme_usa, psw_usa, mac_usa) VALUES (?, ?, ?)", [user.name, user.password, id], (err, rows_affected) => {
                    if (err) resolve({bad: true, description: "Ha ocurrido un error al registrarle"});
                    resolve({bad: false});
                });
            });
    })
};
