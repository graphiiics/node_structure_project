const { Router } = require('express');

const router = new Router();

//Example of route for home page
router.get('/', (req, res, next) => {
    res.send('HELLO WORLD BY @GRAPHIIICS');
});

module.exports = router;
