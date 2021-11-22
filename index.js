const getSlot= require('./getSlot');
const express = require('express');

const app = express();

// static content access
app.use(express.static('static'))

app.post('/login', (req,res) => {
    let userName = req.body.usr;
    let password = req.body.pwd;
    let message = "Access Denied";
    if (userName == 'admin' && password == '123'){
        return res.sendFile(__dirname + '/static/admin.html');
    }
    return res.send(message)
})



app.get('/previous', (req, res) => {

    let content = getTimes();
    res.send(content);
});

app.listen(80);
