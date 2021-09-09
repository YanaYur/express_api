const UserRouter = require('../domains/Users/Routes')
const bodyParser = require('body-parser')

function config(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/users', UserRouter)
}

module.exports = {
    config
}


