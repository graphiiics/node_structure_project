const { getSchemas } = require('./components/schemas');
const { getSecuritySchemas } = require('./components/securitySchemas');
const { getRequestBodies } = require('./components/requestsBody');
const { getResponses } = require('./components/responses');
const { getAuthPaths } = require('./paths/authPaths');
const { getUserPaths } = require('./paths/userPaths');


const getOptions = () => {
    const info = getInfo();
    const servers = getServers();
    const authTag = getNewTag('Auth', 'Auth endpoints');
    const userTag = getNewTag('User', 'User endpoints');
    const paths = getPaths();
    const components = getComponets();
    return {
        definition: {
            openapi: '3.0.1',
            info,
            servers,
            tags: [authTag, userTag],
            paths,
            components
        },
        apis: []
    }
}

const getInfo = () => {
    return {
        title: 'Initial Structure Project Node',
        description: 'Define a inital structure for node, mongo, express project with authentification module',
        contact: {
            name: 'Gael Manzanares',
            //url: 'www.something.io',
            email: 'velkangael@gmail.com'
        },
        license: {
            name: 'MIT',
            url: 'http://choosealicense.com/licenses/mit/'
        },
        version: '1.0.0'
    }
}

const getServers = () => {
    return [
        {
            url: 'http://localhost:3000/',
            description: 'Dev'
        }
    ]
}

const getNewTag = (name, description) => {
    return {
        name,
        description
    }
}

const getPaths = () => {
    const authPaths = getAuthPaths();
    const usersPaths = getUserPaths();
    return {
        ...authPaths,
        ...usersPaths,
    }
}

const getComponets = () => {
    const schemas = getSchemas();
    const securitySchemes = getSecuritySchemas();
    const requestBody = getRequestBodies();
    const responses = getResponses();
    
    return {
        schemas,
        securitySchemes,
        responses,
        requestBody,
    }
}

module.exports = {
    getOptions,
}
