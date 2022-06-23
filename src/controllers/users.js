const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        //res.status(404).json({ message: error.message});
        next(error);
    }
}

module.exports = {
    getUsers,
}