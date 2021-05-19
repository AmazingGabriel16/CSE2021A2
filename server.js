const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/lab8'));

app.get('/*',function(req,res) {
    res.sendFile(path.join(_dirname,'./dist/lab8/index.html'))
});

app.listen(process.env.PORT || 8080);