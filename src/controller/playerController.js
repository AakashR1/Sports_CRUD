const connection = require("../DB/db");

const addPlayer = (req,res)=>{
    try {
      
        connection.execute(
            `INSERT INTO player VALUES ("${req.body.playerId}","${req.body.Name}","${req.body.playerAge}","${req.body.Captain}","${req.body.playerDOB}")`,
            function (err,result){
                if(err) throw err;
                res.send("Player added...")
            }
        )
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const updatePlayerDetails = (req,res)=>{
    try {
        let queryString = [];
        Object.entries(req.body).forEach((element) => {
            if (element[1] !== "") {
                queryString.push(` ${element[0]} = "${element[1]}" `);
            }
        })

        const query = `UPDATE player SET ${String(queryString)} WHERE player_id = ${req.params.PlayerId}`
        console.log(query);
        connection.execute(
            query,
            function (err,result){
                if(err) throw err;
                res.send("Player updated...")
            }
        )
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const getAllPlayers = (req,res)=>{
    try {
        connection.execute(
            `SELECT * FROM player WHERE 1`,
            function(err,result){
                if(err) throw err;
                res.send(result);
            }
            )
            
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

const getPlayer = (req,res)=>{
    try {
        console.log(req.params.PlayerId);
        connection.execute(
            `SELECT * FROM player WHERE player_id = "${req.params.PlayerId}"`,
            function(err,result){
                if(err) throw err;
                res.send(result);
            }
            )
            
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

const deletePlayer = (req,res)=>{
    try {
        console.log(req.params.PlayerId);
        connection.execute(
            `DELETE FROM player WHERE player_id = "${req.params.PlayerId}"`,
            function(err,result){
                if(err) throw err;
                res.send('deleted....');
            }
            )            
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}



module.exports = {
    addPlayer,
    updatePlayerDetails,
    getAllPlayers,
    getPlayer,
    deletePlayer
}