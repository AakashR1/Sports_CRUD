const express = require('express');
const routes = express.Router();
const playerController = require('../controller/playerController');

routes.post('/addPlayer',playerController.addPlayer);
routes.patch('/updatePlayerDetails/:PlayerId',playerController.updatePlayerDetails);
routes.get('/getPlayer/:PlayerId',playerController.getPlayer);
routes.delete('/deletePlayer/:PlayerId',playerController.deletePlayer);
routes.get('/getAllPlayer',playerController.getAllPlayers)


module.exports = routes;