const queries = require('./queries');


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
    }
}
