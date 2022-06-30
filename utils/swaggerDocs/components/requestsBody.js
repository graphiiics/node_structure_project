const getRequestBodies = () => {
    const User = getUserRequestBody();
    const LoginUser = getLoginRequestBody();
    return {
        User,
        LoginUser,
    }
}

const getUserRequestBody = () => {
    return {
        required: [
            'name',
            'email',
            'password'
        ],
        type: 'object',
        properties: {
            name: {
                type: 'string',
                example: 'Ernesto',
            },
            email: {
                type: 'string',
                example: 'velkan@gmail.com'
            },
            password: {
                type: 'string',
                example: '123456',
            }
        }
    }
}
const getLoginRequestBody = () => {
    return {
        required: [
            'email',
            'password'
        ],
        type: 'object',
        properties: {
            email: {
                type: 'string',
                default: 'velkan@gmail.com'
            },
            password: {
                type: 'string',
                default: '123456',
            }
        }
    }
}


module.exports = {
    getRequestBodies
}