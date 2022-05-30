const express = require('express');
const routes = express.Router();
const teamController = require('../controller/teamController');


routes.post('/addTeam',teamController.addTeam);
routes.patch('/updateTeamName/:TeamId',teamController.updateTeam);
routes.get('/getTeam/:Id',teamController.getTeamName);
routes.get('/allTeams',teamController.getAllTeamsAndId);
routes.delete('/deleteTeam/:Id',teamController.deleteTeam)

module.exports = routes;