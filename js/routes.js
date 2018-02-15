const queries = require('./queries');
const tasks = require('./tasks');

module.exports = {
    display: function (req, res) {
        queries.getAllDocuments(req, res);
    },
    helloworld: function(req, res)
    {
        queries.startpage(req, res);
    },
    add: function(req,res)
    {
        queries.addobject(req,res);
    },
    create: function (req, res)
    {
        queries.createproject(req,res);
    },
    remove: function (req, res)
    {
     queries.removeproject(req,res);
    },
    view: function (req, res)
    {
        queries.viewproject(req,res);
    },
    update: function(req, res)
    {
        queries.updateproject(req, res);
    },
    addtask: function(req,res)
    {
        tasks.add(req, res);
    }
}
