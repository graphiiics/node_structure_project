const { Router } = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { getOptions } = require('../../utils/swaggerDocs');

const router = new Router();

const options = getOptions();
const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUi.serve);

router.get('/docs',
    swaggerUi.setup(specs, {
        explorer: false
    })
);

module.exports = router;