const getUserPaths = () => {
    return {
        '/api/v1/user/': {
            get: {
                tags: [ 'User' ],
                summary: 'get all users accounts',
                description: 'return an array of users accounts',
                operationId: 'getAllUsers',
                responses: {
                    200: {
                        description: 'successfull operation get all users',
                        content: {
                            'application/json':{
                                schema: {
                                    type: 'array',
                                    items: {
                                        '$ref': '#/components/responses/user',
                                    }
                                }
                            }
                        }
                    },
                    400 : {
                        description: 'Bad request',
                        content: {
                            'application/json': {
                                schema: {
                                    '$ref': '#/components/responses/badRequestResponse'
                                }
                            }
                        }
                    },
                    401 : {
                        description: 'Error: Unauthorized',
                        '$ref': '#/components/responses/unauthorizedError'
                    }
                },
                security: [
                    {
                        bearerAuth: []
                    }
                ]
            }
        },
    }
}

module.exports = {
    getUserPaths,
}