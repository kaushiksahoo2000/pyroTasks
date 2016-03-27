var express = require('express')
var api = express.Router()

var storage = {
  username: 'test',
  password: 'test',
  groups: [
    {id: 1, name: 'Group1 Alpha'},
    {id: 2, name: 'Group2 Bravo'},
    {id: 3, name: 'Group3 Charlie'}
  ],
  tasks: [
    [
      // No Group with id 0
    ],
    [
      {id: 100, name: 'Alpha Task1', owner: 'John Smith'},
      {id: 200, name: 'Alpha Task2', owner: 'Jim Johnson'}
    ],
    [
      {id: 300, name: 'Bravo Task1', owner: 'Jane Smith'},
    ],
    [
      // Empty Tasklist for Group3
    ]
  ],
  100: {id: 1, name: 'Alpha Task1', owner: 'John Smith'},
  200: {id: 2, name: 'Alpha Task2', owner: 'Jim Johnson'},
  300: {id: 3, name: 'Bravo Task1', owner: 'Jane Smith'},
}

api.post('/signup', function(req, res){
  console.log('Successful signup');
  res.sendStatus(201)
})

api.post('/login', function(req, res){
  if(req.body.username === storage.username && req.body.password === storage.password){
    console.log('Successful login');
    res.sendStatus(200)
  } else {
    console.log('Unsuccessful login');
    res.sendStatus(401)
  }
})

// get all the groups a user belongs to
api.get('/groups', function(req, res){
  console.log('Serving up groups');
  res.send(storage.groups);
})

// get all the tasks in a specific group
api.get('/group/:groupid', function(req, res){
  console.log('Serving up tasks for group ' + req.params.groupid);
  res.send(storage.tasks[req.params.groupid]);
})

// get info for particular task
api.get('/task/:taskid', function(req, res){
  console.log('Serving up task ' + req.params.groupid);
  res.send(storage[req.params.taskid]);
})


module.exports = api
