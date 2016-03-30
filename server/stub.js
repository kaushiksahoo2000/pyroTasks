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
  100: {id: 100, name: 'Alpha Task1', owner: 'John Smith'},
  200: {id: 200, name: 'Alpha Task2', owner: 'Jim Johnson'},
  300: {id: 300, name: 'Bravo Task1', owner: 'Jane Smith'},
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

//adding a new group
api.post('/groups', function(req, res){
  console.log("this is the request", req.body);
  console.log('Successful addition to groups');
  res.sendStatus(201)
})

//joining a new group
api.put('/group/:groupid', function(req, res){
  console.log("this is the request", req.body);
  console.log('Successfully joined the group');
  res.sendStatus(201)
})

// get all the groups a user belongs to
api.get('/groups', function(req, res){
  console.log('Serving up groups');
  res.send(storage.groups);
})

//adding tasks to a specific group

api.post('/group/:groupid', function(req, res){
  console.log("Request Body", req.body, storage);
  // console.log("Group ID", req.params.groupid)
  console.log('Successfully addded task to group');
  storage.tasks[req.params.groupid].push({id: 400, name: req.body.task_name, owner: req.body.owner});
  console.log('this is proper storage tasks', storage.tasks[req.params.groupid]);
  res.sendStatus(201)
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
