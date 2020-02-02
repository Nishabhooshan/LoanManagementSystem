import { Meteor } from 'meteor/meteor';



import '../imports/api/tasks.js';
import {PythonShell} from 'python-shell';


Meteor.startup(() => {
  	
	
});


Meteor.methods({

cl_this(name, email, lander)
{
 		
      var options = {
        mode: 'text',
        pythonPath: '/usr/bin/python',
        pythonOptions: ['-u'],
        scriptPath: '/home/shivendra/meteor_1/hello_world/',
        args: [name, email, lander]
      };

      PythonShell.run('insert.py', options, function (err, results) {
        if (err) throw err;
        
        console.log('results: %j', results);
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
     
     
    
}


});



