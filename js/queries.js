const Cookies       = require('cookies');
const express        = require('express');
const db            = require('./config');
let ObjectID        = require('mongodb').ObjectId;

module.exports= {
    getAllDocuments: function (req, res)//функция , которая возвращает информацию о проектах, хранящихся в базе
    {
      
      
       res.writeHead(200, {"Content-Type": "text/plain"});
       res.write("projects you can see here");
       res.end();
        

    },
    addobject: function(req, res)//функция для заполнения данных по проекту (актуальна для фронтеров)
    {
        res.writeHead(200, {"Content-Type": "text/plain"});
       res.write("Here you can add name of projects and tasks for this project");
       res.end();
        

    },

    createproject: function( req, res)//функция создания нового проекта в бд
    {
        let collection = db.collection('documents');
        let file = { //каждый проект содержит следующие поля
                     name: req.body.name,//имя
                    description: req.body.name,//описание проекта
                     author: req.body.author,//автор проекта
        beginningDateTime: req.body.beginningDateTime,//дата начала
              endDateTime: req.body.endDateTime//дедлайн
        };
        try {
            collection.insert(file);
        }
        catch (err) {
            console.error("don't save in db");
            console.log(err);
        }
        res.redirect('/projects');
    },
    removeproject: function(req,res)//функция удаления проекта из БД при запросе 
    {
        let collection = db.collection('documents');
        try {
            collection.remove(
                { _id: ObjectID(req.body.id) },
                (err, r) => {
                    if (err) throw err;
                    return res.redirect('/projects');
                }
            )
        }//желательно еще прописать где-то триггер для бд, при срабатывании которого удаляются еще
        //и все задачи , у которых idProject - есть id нашего проекта
        catch (err) {
            console.error("didn't delete");
            console.log(err);
        }
    },
    viewproject: function(req,res)
    {
        //функция, которая на основе запроса получает данные об id проекта 
    //возвращает всю информацию об этом объекте из коллекции documents
    //возвращает все задачи для этого проекта из коллекции tasks , у которых id = req.id
    },
    updateproject(req, res)
    
    {
        let collection = db.collection('documents');
        try {
            collection.update({_id: ObjectID(req.body.id)},
                {
                    $set: {
                        name: req.body.name,//имя
                        description: req.body.name,//описание проекта
                         author: req.body.author,//автор проекта
            beginningDateTime: req.body.beginningDateTime,//дата начала
                  endDateTime: req.body.endDateTime//дедлайн
                    }
                }
            );
        }
        catch (err) {
            console.error("didn't edit");
            console.log(err);
        }
        //!!! Нужно добавить какую-то функцию, которая будет возвращать на эту же страницу , 
        // но уже с загруженными новыми данными из бд
    },

    startpage: function(req, res)
    {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello microservice for redmine");
        res.end();
    }
}