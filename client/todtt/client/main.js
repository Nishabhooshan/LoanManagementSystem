import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Router.route('/', function () {
  this.render('all_links');
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



Router.route('/LanderHomePage.html', function () {
  this.render('LanderHomePage');
});


Router.route('/BorrowerHomePage.html', function () {
  this.render('BorrowerHomePage');
});


Template.register.events({
  'click #submitbutton' : function (e) {
     e.preventDefault();
     const users = new Mongo.Collection('users');
     users.insert({
        user_type: $(".user_type").val(),
        email: $(".email").val(),
     });
    }
});



