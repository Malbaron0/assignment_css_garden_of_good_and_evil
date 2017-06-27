const express = require("express");
const cookieParser = require('cookie-parser');
const intentMiddleware = require('./middleware/intent');
const favoritesMiddleware = require('./middleware/favorites');
const insanityMiddleware = require('./middleware/insanity');

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
app.use(favoritesMiddleware);
app.use(insanityMiddleware);


app.get('/', (req , res) => {

    const description = req.intentDescription
    res.render('index', {description,
        intent: req.intent        
    });     
});

app.post('/', (req, res) => {
    
    //keep these in a cookie and load with this setting
    res.cookie("intent", req.body.position);
    res.cookie("food", req.body.food);
    res.cookie("color", req.body.colorPicker);
    res.cookie("insanity", req.body.insanity);
    
    res.redirect("back");
});

app.listen(3000, () => {
    console.log('Listening');
})