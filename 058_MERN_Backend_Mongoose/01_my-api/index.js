const app = require('./app');
const dotEnv = require('dotenv');
dotEnv.config({path:'./config.env'});


app.listen(process.env.PORT,()=>{
    console.log(`This is from env ${process.env.PORT}`);
});
