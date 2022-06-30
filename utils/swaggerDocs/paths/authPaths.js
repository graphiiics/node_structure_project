const getAuthPaths = () => {
    return {
        '/auth/signup': {
            post: {
                tags: [ 'Auth' ],
                summary: 'sign up new account',
                description: 'create a new account',
                operationId: 'signup',
                requestBody: {
                    description: 'new account',
                    content: {
                        'application/json': {
                            schema: {
                                '$ref': '#/components/requestBody/User',
                            }
                        }
                    }
                },
                responses: {
                    201 : {
                        description: 'user created sucessfully',
                        content: {
                            'application/json': {
                                schema: {
                                    '$ref': '#/components/responses/newUser'
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
                    }
                }
            }
        },
        '/auth/login': {
            post: {
                tags: [ 'Auth' ],
                summary: 'log in user',
                description: 'login user account',
                operationId: 'login',
                responses: {
                    200 : {
                        description: 'user login sucessfully',
                        content: {
                            'application/json': {
                                schema: {
                                    '$ref': '#/components/responses/tokenResponse'
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
                        'basicAuth' : []
                    }
                ]
            }
        },
    }
}

module.exports = {
    getAuthPaths,
}