const express = require("express");
const cookieParser = require('cookie-parser');
const intentMiddleware = require('./middleware/intent');

const app = express();
app.use(cookieParser());

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: 'views/'
}));
app.set('view engine', 'handlebars');

//set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//custom middleware
app.use(intentMiddleware);


app.get('/', (req , res) => {
    console.log(req.intent);
    
    console.log(req.intentDescription);
    res.render('index');
});

app.post('/', (req, res) => {
    //keep these in a cookie and load with this setting
    console.log(req.body.food); 
    console.log(req.body.position);
    console.log(req.body.colorPicker);
    console.log(req.body.insanity);
    res.redirect("back");
});

app.listen(4000, () => {
    console.log('Listening');
})