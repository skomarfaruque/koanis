const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');
const path = require('path');
const router = require('./start/routes');
const mongoose = require('mongoose')
require('dotenv').config()

const app = new Koa();
const PORT = process.env.PORT || 1337;
mongoose.Promise = require('bluebird')
mongoose
.connect(process.env.MONGODB)
.then((response) => {
    // console.log('mongo connection created')
})
.catch((err) => {
    console.log("Error connecting to Mongo")
    console.log(err);
})

// sessions
app.keys = ['super-secret-key'];

// body parser
app.use(bodyParser());
// authentication

app.use(passport.initialize());
app.use(passport.session());


// routes
app.use(router.routes());
app.use(router.allowedMethods());

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
