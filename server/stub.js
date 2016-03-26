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
      {id: 1, name: 'Alpha Task1', owner: 'John Smith'},
      {id: 2, name: 'Alpha Task2', owner: 'Jim Johnson'}
    ],
    [
      {id: 1, name: 'Bravo Task1', owner: 'Jane Smith'},
    ],
    [
      // Empty Tasklist for Group3
    ]
  ]
}

api.post('/signup', function(req, res){
  res.sendStatus(201)
})

api.post('/login', function(req, res){
  if(req.body.username === storage.username && req.body.password === storage.password){
    res.sendStatus(200)
  } else res.sendStatus(401)
})

api.get('/groups', function(req, res){
  res.send(storage.groups);
})

api.get('/tasks/:groupid', function(req, res){
  res.send(storage.tasks[req.params.groupid]);
})

module.exports = api
