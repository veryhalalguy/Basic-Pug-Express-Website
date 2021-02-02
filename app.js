const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get ('/', (req, res) => {
    res.render('index.pug', {
        title: 'home'
    })
})

app.get ('/about', (req, res) => {
    res.render('about.pug', {
        title: 'about'
    })
})

app.listen(1234, () => {
    console.log("Server started on port 1234");
})