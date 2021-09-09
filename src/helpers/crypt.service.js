const bcrypt = require('bcrypt');
const saltRounds = 10;

async function crypt(data) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(data, saltRounds, function (err, hash) {
            if (err) {
                return reject(err)
            } else {
                return resolve(hash)
            }
        });
    })
}

const compare = async (cripted, original) => new Promise((resolve, reject) => {
    bcrypt.compare(original, cripted, function (err, result) {
        debugger
        if (err) {
            reject(err)
        } else {
            resolve(result)
        }
    });
})



module.exports = {
    crypt,
    compare
}