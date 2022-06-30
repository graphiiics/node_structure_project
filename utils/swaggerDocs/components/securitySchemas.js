const getSecuritySchemas = () => {
    const bearerAuth = getBearerAuth();
    const basicAuth = getBasicAuth();
    return {
        bearerAuth,
        basicAuth,
    }
}

const getBearerAuth = () => {
    return {
        type: 'http',
        scheme: 'bearer',
        bearerFormart: 'JWT'
    }
}

const getBasicAuth = () => {
    return {
        type: 'http',
        //in: 'header',
        scheme: 'basic',
    }
}

module.exports = {
    getSecuritySchemas,
}