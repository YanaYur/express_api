const UsersService = require('../../Users/Service')
const CryptoService = require('../../../helpers/crypt.service')

async function signIn(req, res, next) {
    try {
        const { body } = req
        const createdUser = await UsersService.createUser(body)
        delete createdUser.password
        return res.status(201).json(createdUser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function logIn(req, res, next) {
    try {
        const { body } = req
        const { email, password } = body

        const user = await UsersService.findByEmail(email)
        if (!user) return res.status(404).json({ message: 'User not found' })

        const validated = await CryptoService.compare(user.password, password)
        if (!validated) return res.status(403).json({ message: 'Incorrect password' })

        delete user.password

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    signIn,
    logIn
}