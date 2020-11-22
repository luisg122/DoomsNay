const express = require('express')
const fs = require('fs')
const path  = require('path')
const app = express()
const hoganMiddleWare = require('hogan-middleware')
const userList = require('/xampp/htdocs/DoomsNay/getTweetLocations');
//const getTweetLocations = require('./getTweetLocations')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleWare.__express)
app.use(express.static(path.join(__dirname, 'Assets')))

app.get('/', (req, res, next) => {
    res.send("Hello!!")
})

app.get('/json', (req, res, next) => {
    const data ={
        greeting: 'Hello!!'
    }

    res.json(data)
})

app.get('/index', (req, res, next) => {
    res.render('index', null)
})

app.get('/visualMap', (req, res, next) => {
    res.render('visualMap', null)
})

app.get('/tweetsInfo', (req, res, next) => {
    res.render('tweetsInfo', null)
})

app.get('/api/success', function(req, res) { 
    var users = userList(res);
    console.log("users")

    /*var table = document.getElementById('myTable');
    for(var i = 0; i < users.length; i++){
        output += `<div class="live_streams">
            <div id="tweetName"><p id="t_name">${users[i].screen_name}</p></div>
            <div id="tweetDate"><p id="t_date">${users[i].date}</p></div>
            <br><br>
            <div id="tweetText"><p id="t_text">${users[i].text}</p></div>
        </div>`
    }

    if(output !== ""){
        table.html(output);
    }*/
})

app.listen(3000)    //  3000, 5000, 8000, 8080