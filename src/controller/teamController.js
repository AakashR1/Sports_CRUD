const connection = require('../DB/db');
const CreateTable = require('../createTables/createTables');
CreateTable.createTable()
const addTeam = (req, res) => {
        
    try {
        connection.execute(
        
        `INSERT INTO teams(team_name) VALUES ("${req.body.TeamName}")`,
            function (err, results, fields) {
                if (err) throw err
                res.send('Team is added....')
            }
        );
    }
    catch (error) {
    res.send(error);
    console.log(error);
}
}

const updateTeam = (req,res)=>{
    try {
        connection.execute(
            `UPDATE teams SET team_name = "${req.body.TeamName}" WHERE team_id = "${req.params.TeamId}"`,
            function(err,result){
                if (err) throw err;
                console.log(result);
                res.send('updated...')
            }
        )
    } catch (error) {
        
    }
}

const getAllTeamsAndId = (req,res)=>{
    try {
        connection.execute(
            `SELECT * FROM teams WHERE 1`,
            function (err,result){
                res.send(result)
            }
        )
    } catch (error) {
        
    }
}

const getTeamName = (req,res)=>{
    try {
        console.log(req.params.id);
        connection.execute(
            `SELECT * FROM teams WHERE team_id = "${req.params.Id}"`,
            function (err,result){
                res.send(result)
            }
        )
    } catch (error) {
        
    }
}

const deleteTeam = (req,res)=>{
    try {
        console.log(req.params.id);
        connection.execute(
            `DELETE FROM teams WHERE team_id = "${req.params.Id}"`,
            function (err,result){
                if (err) throw error
                res.send('deleted....')
            }
        )
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addTeam,
    updateTeam,
    getAllTeamsAndId,
    getTeamName,
    deleteTeam
}