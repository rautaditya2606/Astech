const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejsMate = require('ejs-mate');
const path = require('path');

const port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("listings/index");
});

app.get("/home", (req, res) => {
    res.render("listings/home");
});

app.get("/event", (req, res) => {
    res.render("event/event");
});

app.get("/upcomingEvent", (req, res) => {
    res.render("event/upcomingEvent");
});

app.get("/expo",(req, res) => {
    res.render("event/expo");
});

app.get("/workshop", (req, res) => {
    res.render("event/workshop");
});

app.get("/ent", (req, res) => {
    res.render("event/ent");
});

app.get("/act",(req, res) => {
    res.render("event/act");
});

app.get("/member", (req, res) => {
    res.render("listings/member");
});

app.get("/about", (req, res) => {
    res.render("listings/about");
});

app.get("/pastevent", (req, res) => {
    res.render("event/pastEvent");
});

app.get("/opening", (req, res) => {
    res.render("event/opening");
});

app.get("/sih", (req, res) => {
    res.render("event/sih");
});

app.get("/contact",(req,res)=>{
    res.render("listings/contact");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}...`);
        app.listen(port + 1);
    } else {
        console.error('Server error:', err);
    }
});