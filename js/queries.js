const Cookies       = require('cookies');
const express        = require('express');
const db            = require('./config');
let ObjectID        = require('mongodb').ObjectId;

module.exports= {
    getAllDocuments: function (req, res)
    {
      
      
       res.writeHead(200, {"Content-Type": "text/plain"});
       res.write("projects you can see here");
       res.end();
        

    },
    addobject: function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/plain"});
       res.write("Here you can add name of projects and tasks for this project");
       res.end();
        

    },

    createproject: function( req, res)
    {
        //формируется какой-то JSON по заполненным пользователем данным и отправляет на сервер
        //сервер принимает данные и записывает их в базу 
        res.redirect('/projects');
    },
    
    startpage: function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello microservice for redmine");
        res.end();
    }
}