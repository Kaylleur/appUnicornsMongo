var unicornModel = require('../models/unicorns');

module.exports = {
    all: function(req, res) {
        unicornModel.all(function(unicorns, err) {
            res.json(unicorns||err);
        });
    },
    get: function(req, res) {
        var id = req.params.id;
        unicornModel.get(id, function(err, unicorn) {
            if (err) {
                res.send({ err: err});
            }
            res.json(unicorn);
        });
    },
    add: function(req, res) {
        var unicorn = req.body;
        unicornModel.add(unicorn, function(err, unicorn) {
            if (err) {
                res.send({ err: err});
                return;
            }
            res.json(unicorn);
        });
    },
    edit: function(req, res) {
        var unicorn = req.body;
        unicornModel.edit(req.params.id,unicorn, function(err, unicorn) {
            if (err) {
                res.send({ err: err});
                return;
            }
            res.json(unicorn);
        });
    },
    remove: function(req,res){
        unicornModel.remove(req.params.id, function(err, unicorn) {
            if (err) {
                res.send({ err: err});
                return;
            }
            res.json(unicorn);
        });
    }
};
