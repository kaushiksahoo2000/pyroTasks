var express = require('express')
var api = express.Router()
var parser = require('body-parser')
var util = require('./utilities')
var db = require('./db')

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
  console.log("login credentials from login form", req.body.username, req.body.password);
  if(req.body.username === storage.username && req.body.password === storage.password){
    console.log('Successful login');
    res.sendStatus(200)
  } else {
    console.log('Unsuccessful login');
    res.sendStatus(401)
  }
})

api.post('/groups', function(req, res){
  var name = req.body.group_name;
  if(name !== null){
    db.query('INSERT INTO GROUPS SET name = ?;',
    [name],
    function(err, result){
      if(err){
        console.error(err);
        res.sendStatus(500);
      } else {
        
        res.sendStatus(201);
      }
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = api;
