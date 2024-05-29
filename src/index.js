const express = require('express');
const {PORT} = require('./config/serverConfig.js')
const setUpAndRunServer = async ()=>{
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}
setUpAndRunServer();