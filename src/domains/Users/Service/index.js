
const database = [{ email: 'test@email.com', name: 'Misha', id: 1, password: '123' }]
const CryptoService = require('../../../helpers/crypt.service')
/**
 * Creates a new user if it does not exists yet
 * 
 * @param {{ 
 *  email:string, 
 *  name:string, 
 *  password:string
 * }} userData - user data
 * @returns {} created user
 */
async function createUser(userData) {
    const { email, name, password } = userData

    const enciptedPassword = await CryptoService.crypt(password)

    const existingUser = database.find(user => user.email === email)

    if (existingUser) throw Error('User already exists')

    const newUser = { email, name, password: enciptedPassword, id: `${Date.now()}` }

    database.push(newUser)

    delete newUser.password
    return newUser
}

async function readUserById(id) {
    return database.find(user => user.id === id)
}

async function findByEmail(email) {
    return database.find(user => user.email === email)
}

module.exports = {
    createUser,
    readUserById,
    findByEmail
}


