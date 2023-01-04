const app = require('./app');
const dotEnv = require('dotenv');
dotEnv.config({path:'./config.env'});


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at PORT ${process.env.PORT}`);
});
