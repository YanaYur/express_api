const UserRouter = require('../domains/Users/Routes')
const AuthRouter = require('../domains/Auth/Routes')
const bodyParser = require('body-parser')

function config(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/users', UserRouter)
    app.use('/auth', AuthRouter)
}

module.exports = {
    config
}


