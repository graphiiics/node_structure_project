const joi = require('joi');

function validate(data, schema){
    const { error } = schema.validate(data);
    return error;
}

function validationHandler(schema, check = 'body'){
    return function(req, res, next){
        const error = validate(req[check], schema);

        error ? next(error) : next();
    }
}

module.exports = validationHandler;