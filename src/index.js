const express = require('express');
const {PORT} = require('./config/serverConfig.js');
const body_parser = require('body-parser');
const setUpAndRunServer = async ()=>{
    const app = express();
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true})); 
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}
setUpAndRunServer();