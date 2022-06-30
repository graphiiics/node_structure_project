const getResponses = () => {
    const unauthorizedError = getUnauthorizedError();
    const user = getUserResponse();
    const newUser = getNewUserResponse();
    const badRequestResponse = getBadRequestResponse();
    const tokenResponse = getTokenResponse();
    return {
        unauthorizedError,
        user,
        newUser,
        badRequestResponse,
        tokenResponse,
    }
}

const getUnauthorizedError = () => {
    return {
        description: 'Error: Unauthorized',
        schema: {
            type: 'string',
            example: 'Error: Unauthorized'
        }
    }
}

const getNewUserResponse = () => {
    return {
        type: 'object',
        properties: {
            data: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        example: '62aa4d66b4847080fde7d85b'
                    },
                    name: {
                        type: 'string',
                        example: 'Gael'
                    },
                    email: {
                        type: 'string',
                        example: 'velkangael@hmail.com'
                    },
                    password: {
                        type: 'string',
                        example: '$2b$10$QsCyzQfNbSkumZYtYFebwOgZ0Ed5QY0K9NwIPGSMyd/ELYwLKqYGS'
                    },
                    createdAt: {
                        type: 'date',
                        example: '2022-06-15T21:21:37.594Z'
                    },
                    _v: {
                        type: 'integer',
                        example: '0'
                    }
                }
            },
            message: {
                type: 'string',
                example: 'user created sucessfully'
            }
        }
    }
}

const getTokenResponse = () => {
    return {
        type: 'object',
        properties: {
            access_token: {
                type: 'string',
                example: 'eyJ1c2VyIjp7ImlkIjoiNjJiZGUwN2Q3YTEzOWUzMDg3YWNhN2MyIiwibmFtZSI6IkVybmVzdG8iLCJlbWFpbCI6InZlbGthbkBnbWFpbC5jb20ifSwiaWF0IjoxNjU2NjEwOTk0LCJleHAiOjE2NTY2MTM2OTR9'
            },
            user: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        example: '62aa4d66b4847080fde7d85b'
                    },
                    name: {
                        type: 'string',
                        example: 'Gael'
                    },
                    email: {
                        type: 'string',
                        example: 'velkangael@hmail.com'
                    }
                }
            }
        }
    }
}

const getUserResponse = () => {
    return {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '62aa4d66b4847080fde7d85b'
            },
            name: {
                type: 'string',
                example: 'Gael'
            },
            email: {
                type: 'string',
                example: 'velkangael@hmail.com'
            },
            password: {
                type: 'string',
                example: '$2b$10$QsCyzQfNbSkumZYtYFebwOgZ0Ed5QY0K9NwIPGSMyd/ELYwLKqYGS'
            },
            createdAt: {
                type: 'date',
                example: '2022-06-15T21:21:37.594Z'
            },
            __v: {
                type: 'integer',
                example: '0'
            }
        }
    }
}

const getBadRequestResponse = () => {
    return {
        type: 'object',
        properties: {
            error: {
                type: 'string',
                example: 'E11000 duplicate key error collection: loginSystem.users index: email_1 dup key: { email: \"velkaaan@gmail.com\"'
            },
            stack: {
                type: 'string',
                example: 'MongoServerError: E11000 duplicate key error collection: loginSystem.users index: email_1 dup key: { email: \"velkaaan@gmail.com\" }\n    at /Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/operations/insert.js:53:33\n    at /Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/cmap/connection_pool.js:273:25\n    at handleOperationResult (/Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/sdam/server.js:327:20)\n    at Connection.onMessage (/Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/cmap/connection.js:215:9)\n    at MessageStream.<anonymous> (/Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/cmap/connection.js:63:60)\n    at MessageStream.emit (node:events:390:28)\n    at processIncomingData (/Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/cmap/message_stream.js:108:16)\n    at MessageStream._write (/Users/gaelmanzanares/Code/node_structure_project/node_modules/mongodb/lib/cmap/message_stream.js:28:9)\n    at writeOrBuffer (node:internal/streams/writable:389:12)\n    at _write (node:internal/streams/writable:330:10)'
            }
        }
    }
} 

module.exports = {
    getResponses,
}