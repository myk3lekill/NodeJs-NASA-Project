const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();//Router is a middleware that groups togeter related routes

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;