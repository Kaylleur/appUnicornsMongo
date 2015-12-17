var mongoose = require("mongoose");
var schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/killingUnicorns");

var unicornsSchema = new schema({
    name : {type : String, required : true},
    date : {type: Date, required : true},
    weight : {type : Number, required : true},
    gender : {type : String, required : true},
    likes : {type : Array},
    vampires : Number
});

module.exports = unicornsSchema;

