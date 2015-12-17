const mongo = require('mongodb-bluebird');

module.exports = {
    connect : function() {
        return mongo.connect("mongodb://localhost:27017/killingUnicorns");
    }

}

