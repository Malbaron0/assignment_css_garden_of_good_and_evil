const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: 'views/'
}));
app.set('view engine', 'handlebars');



app.get('/', (req , res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Listening');
})