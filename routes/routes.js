'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const coUser = new userController();

router.get('/create',function(req,res) {
	coUser.create(req,res);
});
router.get('/connexion',function(req,res) {
	coUser.connexion(req,res);
});
module.exports = router;