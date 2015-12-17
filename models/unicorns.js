var _ = require('lodash');
var unicorndb = require('../connexion/connexion');
var unicornSchema = require('./unicorn_model');
var mongoose = require('mongoose');

var Unicorn = mongoose.model('unicorns',unicornSchema);



module.exports = {
    all: function(callback) {
        Unicorn.find((unicorn,err) => {callback(unicorn, err);});
    },
    get: function(id, callback) {
        Unicorn.findById(id)
            .then(unicorn => callback(null, unicorn));
    },
    add: function(unicorn, callback) {
        var newUnicorn = new Unicorn(unicorn);
        newUnicorn.save(err => callback(err,newUnicorn));
    },
    remove: function(id, callback) {
        Unicorn.findOneAndRemove(id,callback);
    },
    edit: function(id, body, callback){
        Unicorn.findByIdAndUpdate(id,{ $set : body },callback);
    }
};
