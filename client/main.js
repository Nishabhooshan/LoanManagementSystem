import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import Users from '../lib/lib.js';



Router.route('/', function () {
  this.render('all_links');
});


Router.route('/register.html', function () {
  this.render('register');
});




Template.submitbutton.events({
    'click .AddPlaceButton': function (e) {
      e.preventDefault();
      alert("You pressed the button");
    }
});



Template.submitbutton.events({
    'click .AddPlaceButton': function (e) {
      e.preventDefault();
      alert("You pressed the button");
    }
});

 
