'use strict'

var express = require('express');

var prestamoController = require('../controllers/prestamoController');

var api = express.Router();

api.post('/prestamo', prestamoController.guardarprestamo);
api.get('/prestamo', prestamoController.mostrar);
api.get('/prestamopersona', prestamoController.prestamopersona);

module.exports = api;
