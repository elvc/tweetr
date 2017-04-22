"use strict";
const ObjectID = require('mongodb').ObjectID;

module.exports = function makeDataHelpers(db) {
  return {

    getTweets: function (callback) {
      db.collection('tweets').find().sort({created_at: -1}).toArray(callback); 
    },

    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback);
    },

    updateLikes: function (id, like, callback) {
      // db.collection('tweets').update({ _id: ObjectID(id) }, { $set:{ like: 0 }}, callback);
      db.collection('tweets').update({ _id: ObjectID(id) }, { $inc: { likes: like } }, callback);
    }
  };
}