

import { Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';



import '../imports/api/tasks.js';
import {PythonShell} from 'python-shell';


Meteor.startup(() => {
  	
	
});


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
{
 		
      var options = {
        mode: 'text',
        pythonPath: '/usr/bin/python',
        pythonOptions: ['-u'],
        scriptPath: '/home/shivendra/meteor_1/hello_world/',
        args: [email]
      };

      var results
      PythonShell.run('get.py', options, function (err, results) {
        if (err) throw err;
        
        
        console.log('user type: %j', results);
        return results;
      });
     
     
    
},
find_type(hello)
{
	console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

},
process_lander( email, loanamount)
{
 // var table=Mongo.Collection.get('loan_users');
 //var table= db.getCollection('loan_users');
 //const Chatrooms=new Mongo.Collection('loan_users');
  //Chatrooms.insert({text:'hello,world!'});
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
  //dbo.collection("loan_users").insertOne(myobj, function(err, res) {
    //dbo.collection("loan_users").update({e_mail:email}, {loan_amount:loanamount } , function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

},
process_borrower( email, loanamount)
{
 // var table=Mongo.Collection.get('loan_users');
 //var table= db.getCollection('loan_users');
 //const Chatrooms=new Mongo.Collection('loan_users');
  //Chatrooms.insert({text:'hello,world!'});
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



