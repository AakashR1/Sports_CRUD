const express = require('express');
const app = express();
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRouters');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/team',teamRoutes);
app.use('/player',playerRoutes);

app.use('*',(req,res)=>{
    res.json(404,{massage:'Oops what you are looking is may be not exist'})
})
const PORT = 3000;
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`server is listening port ${3000}`);
})