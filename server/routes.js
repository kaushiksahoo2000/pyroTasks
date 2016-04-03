var express = require('express')
var api = express.Router()
var parser = require('body-parser')
var db = require('db')
var util = require('utilities')

api.post('/groups', function(req, res){
  var name = req.body.name;
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
