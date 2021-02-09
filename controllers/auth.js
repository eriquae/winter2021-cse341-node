const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

exports.middleware = (req, res, next) => {
    if(typeof req.session.isLoggedIn !== 'undefined' && req.session.isLoggedIn === true) {
      res.locals.isLoggedIn = true
      res.locals.name = req.session.user.name
    }
    else {
      res.locals.isLoggedIn = false
    }
    next()
  }

exports.getLogin = (req, res, next) => {
    res.render('pages/login', {
        title: 'login',
        path: '/login',
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email: email
    })
    .then((userDoc) => {
        if (userDoc) {
            bcrypt.compare(password, userDoc.password)
                .then(result => {
                   if (result) {
                    req.session.isLoggedIn = true;
                    req.session.user = userDoc;
                    res.redirect('/store')
                   }
                   else {
                       res.redirect('/login')
                    }
                })  
        }
        else {
            res.redirect('/login')
        }
    })
};

exports.getSignup = (req, res, next) => {
    res.render('pages/signup', {
        title: 'signup',
        path: '/signup',
    });
};

exports.postSignup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/signup');
            }
            return bcrypt.hash(password, 12);    
        })
        .then(hashedPassword => {
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            });
            user.save()
                .then(() => {
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                    res.redirect('/store')
                });
        })

};

exports.getLogout = (req, res, next) => {
    req.session.destroy()
    res.redirect('/')
};