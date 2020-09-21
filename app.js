// Packages required
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var hbs = require('hbs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// MongoDB Atlas url
const uri = "mongodb+srv://rb:NRmaVVrF9xFbLOIh@testdev.7wjq8.gcp.mongodb.net/le_bon_plan?retryWrites=true&w=majority";

// Models paths
const User = require('./models/users');

// Routes paths
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Layout paths
const viewsFolder = path.resolve(__dirname, 'views');
const layoutFolder = path.resolve(__dirname, 'views/layout');
const partialsFolder = path.resolve(__dirname, 'views/partials');

// Connect to database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected…');
  console.log(uri);
})
.catch(err => console.log(err));

// Initializing main app
var app = express();

// Set required engine
app.set('view engine', 'hbs');
// view engine setup and add set of directories to lookout
app.set('views', [viewsFolder, layoutFolder]);
// Change the location of our global default layout if necessary
app.set('view options', { layout: './layout/layout' });
// Defining assets folder
app.use(express.static(__dirname + '/public'));
// Register partials folder
hbs.registerPartials(partialsFolder);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Defining routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Session user
app.use(
  expressSession({
    secret: "merguez007",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // Save the user.id to the session
passport.deserializeUser(User.deserializeUser()); // Receive the user.id from the session and fetch the User from the DB by its ID

// app.get("/admin", (req, res) => {
//   console.log("GET /admin");
//   if (req.isAuthenticated()) {
//     console.log(req.user);
//     res.render("admin");
//   } else {
//     res.redirect("/");
//   }
// });

// app.get("/signup", (req, res) => {
//   console.log("GET /signup");
//   if (req.isAuthenticated()) {
//     res.redirect("/admin");
//   } else {
//     res.render("signup");
//   }
// });

// app.post("/signup", (req, res) => {
//   console.log("POST /signup");

//   console.log("will signup");

//   const username = req.body.username;
//   const password = req.body.password;

//   User.register(
//     new User({
//       username: username
//       // other fields can be added here
//     }),
//     password, // password will be hashed
//     (err, user) => {
//       if (err) {
//         console.log("/signup user register err", err);
//         return res.render("signup");
//       } else {
//         passport.authenticate("local")(req, res, () => {
//           res.redirect("/admin");
//         });
//       }
//     }
//   );
// });

// app.get("/login", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.redirect("/admin");
//   } else {
//     res.render("login");
//   }
// });

// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/admin",
//     failureRedirect: "/login"
//   })
// );

app.get("/logout", (req, res) => {
  console.log("GET /logout");
  req.logout();
  res.redirect("/");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {});
});

module.exports = app;