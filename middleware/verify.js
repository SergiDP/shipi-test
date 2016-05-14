


var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;
var collection;
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    collection = db.collection('users');
});

var verify = function(username, password, done) {
    console.log("password",password);
    collection.findOne({"username":username, "password":password}, function(err, user){
        if(user) {
            console.log("id");
            return done(null, user);
        }
        else {
            console.log('no');
            return done(null, false, {message:"incorrect credentials"});
        }
    });

};

var serialize = function(user, done){
    done(null, user._id);
};

var deserialize = function(id, done){
    collection.findOne({"_id":new ObjectId(id)}, function(err, user){
        if(user) {
            return done(err, user);
        }
        else {
            return done(err, null);
        }
    });

};

module.exports = {
    verUser: verify,
    serialize: serialize,
    deserialize: deserialize
};
