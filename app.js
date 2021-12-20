const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

//MiddLewares
app.use(cors());
require('dotenv/config');

app.use(bodyParser.json());
//import

const postRoute = require('./routes/posts');

app.use('/posts' , postRoute);
// app.use('/user', userRoute);

//  routes

app.get('/', (req,res) => {
  res.send('We are on home');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION , () => console.log ('connected to db')
);




app.listen(process.env.PORT);
