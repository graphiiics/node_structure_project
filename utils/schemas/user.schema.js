const joi = require('joi');

const createUserSchema = joi.object({
    name: joi.string().min(2).max(80).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

module.exports = {
    createUserSchema,
}