const UsersService = require('../Service')

async function createUser(req, res, next) {
    try {
        const { body } = req
        const createdUser = await UsersService.createUser(body)

        res.status(201).json(createdUser)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

async function readUser(req, res, next) {
    try {
        const { params: { userId } } = req
        const user = await UsersService.readUserById(userId)

        if (!user) return res.status(404).json({ message: 'User not found' })
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    createUser,
    readUser
}