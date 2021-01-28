
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Place this with other requires (like 'path' and 'express')
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const app = express();
const storeRoutes = require('./routes/store');

const corsOptions = {
    origin: "https://happiness-store.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://eriquaelvira:kyCuOJUdw9konWwJ@cluster0.k7sou.mongodb.net/<dbname>?retryWrites=true&w=majority";





app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/store', storeRoutes)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my Store', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })
  //  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

  mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    //... // This should be your user handling code implement following the course videos
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch(err => {
    console.log(err);
  });