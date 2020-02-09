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

Router.route('/loanamount.html', function () {
  this.render('loanamount');
});

Router.route('/login_lander.html', function () {
  this.render('login_lander');
});

Router.route('/error_login.html', function () {
  this.render('error_login');
});



//import './imports/api/tasks.js'
Template.register.events({
  'click #registerbutton' : function (e) {
   e.preventDefault();
   var name = $('input[name="name"]').val();
   var email = $('input[name="email"]').val();
   var lander = $('input[name="lander_borrower"]').val();

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


   } });


//function for lander
Template.loanamount.events({
  'click #processlanderbutton' : function (e) {
   e.preventDefault();
   alert("called processlander");
   var loanamount = $('input[name="loanmoney"]').val();
   var email = $('input[name="email"]').val();


   Meteor.call('process_lander',  email, loanamount, function() {

   });

    
   }



 });



Template.BorrowerHomePage.events({
  'click #borrowerprocessbutton' : function (e) {
   e.preventDefault();
   var loanamount = $('input[name="loanmoney"]').val();
   var email = $('input[name="email"]').val();


   Meteor.call('process_borrower',  email, loanamount, function() {

   });

     
   }



 });

/*Template.login.events({
  'click #loginbutton' : function (e) {
   e.preventDefault();
    
    alert("calledlogin");
   var email = $('input[name="email"]').val();


  Meteor.call('find_type',  email, function() {

   });

     
   }



 });*/



   Template.login.events({
  'click #loginbutton' : function (e) {
     e.preventDefault();
     alert("called this");
     var email = $('input[name="email"]').val();
     
     
     Meteor.call('find_type', email,  function() {
        
    });
  
// Simulate an HTTP redirect:
window.location.replace("/BorrowerHomePage.html");
 }
}); 




