

import { Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import '../imports/api/tasks.js';

Meteor.startup(() => {

	
});
 function removeRouteByName (routeName) {
  var routes = Router.routes;
  var route = routes[routeName];
  if (!route) return false;  // Returns false if route is not found

  // Remove route from Router
  delete routes[routeName];
  delete routes._byPath[route.path()];
  var routeIndex = routes.indexOf(route);
  if (routeIndex >= 0) routes.splice(routeIndex, 1);

  // Remove route handler from MiddleWareStack
  delete Router._stack._stack[routeName];
  Router._stack.length -= 1;

  return true;  // Returns true when route is removed
}

Meteor.methods({
 

  cl_this(name, email, lander)
  {


    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:3001/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("local");
      var myobj= {
        "user":name,
        "e_mail": email,
        "lander": lander,
        "loan_amount":0                    
      };
      dbo.collection("loan_users").insertOne(myobj, function(err, res) {

        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

  },

  find_type(email)
  { /*
    var  user_count=0;
  console.log ("find_type called"); 
  var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:3001/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("local");
      var myobj= {
        
        "e_mail": email
                           
      };
      dbo.collection("loan_users").find(myobj).toArray(function(err, result) {
       //dbo.collection("loan_users").findOne({myobj}, function(err, result) {

        if (err) throw err;
        console.log(result.length);
        user_count=result.length;
        db.close();
     });
    });
    removeRouteByName('/response.html');
Router.route('/response.html', function () {
var redirectUrl 
if(user_count==1)
  redirectUrl='/BorrowerHomePage.html';
 else
 redirectUrl  = '/error_login.html' ;

  this.response.writeHead(302, {
    'Location': redirectUrl
  });

  this.response.end();

}, {where: 'server'});*/
  },

  process_lander( email, loanamount)
  {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:3001/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("local");
      console.log("called process_landerfunction");
      console.log(loanamount);
      var myquery = { e_mail: email};
      var newvalues = { $set: {loan_amount: loanamount } };
      dbo.collection("loan_users").updateOne(myquery, newvalues, function(err, res){

        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });

  },
  process_borrower( email, loanamount)
  {

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:3001/";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("local");
      console.log("called process_borrower function");
      var myquery = { e_mail: email};
      var newvalues = { $set: {loan_amount: -loanamount } };
      dbo.collection("loan_users").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  }
});