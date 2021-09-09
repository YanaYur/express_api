
const database = [{ email: 'test@email.com', name: 'Misha', id: 1, password: '123' }]

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

    const existingUser = database.find(user => user.email === email)

    if (existingUser) throw Error('User already exists')
    const newUser = { email, name, password, id: `${Date.now()}` }

    database.push(newUser)
    return newUser
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
async function readUserById (id){
    return database.find(user => user.id === id)
}


module.exports = {
    createUser,
    readUserById
}


