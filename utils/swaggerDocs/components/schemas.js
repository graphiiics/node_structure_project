const getSchemas = () => {
    const User = getUserSchema();
    return {
        User,
    }
}

const getUserSchema = () => {
    return {
        required: [
            '_id',
            'name',
            'email',
            'password'
        ],
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '62bb2ac3de90fdbff8b5281a'
            },
            name: {
                type: 'string',
                example: 'Gael'
            },
            email: {
                type: 'string',
                example: 'velkan@gmail.com'
            },
            password: {
                type: 'string'
            }
        }
    }
}

module.exports = {
    getSchemas,
}