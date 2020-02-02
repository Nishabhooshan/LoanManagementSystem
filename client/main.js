import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { PythonShell } from 'python-shell';


import './main.html';


Router.route('/', function () {
  this.render('all_links');
});



Router.route('/img.jpg', function () {
  this.render('image_links');
});



Router.route('/register.html', function () {
  this.render('register');
});

Router.route('/login.html', function () {
  this.render('login');
});


Router.route('/dashboard.html', function () {
  this.render('dashboard');
});

Router.route('/ForgotPassword.html', function () {
  this.render('ForgotPassword');
});

Router.route('/ResetPassword.html', function () {
  this.render('ResetPassword');
});

Router.route('/registered.html', function () {
  this.render('registered');
});

Router.route('/LanderHomePage.html', function () {
  this.render('LanderHomePage');
});


Router.route('/BorrowerHomePage.html', function () {
  this.render('BorrowerHomePage');
});

//import './imports/api/tasks.js'
Template.register.events({
  'click #submitbutton' : function (e) {
     e.preventDefault();
     var name = $('input[name="name"]').val();
     var email = $('input[name="email"]').val();
     var lander = $('input[name=lander]:checked').val();

     var lander_type = ""
     if (lander == null) {
        lander_type = "borrower"
     }
     else
     {
        lander_type = "Lander"
     }

     Meteor.call('cl_this', name, email, lander_type, function() {
        
    });

     }
});

