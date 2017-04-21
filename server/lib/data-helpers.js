"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    getTweets: function (callback) {
      db.collection('tweets').find().sort({created_at: -1}).toArray(callback); 
    },

    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback);
    }
  };
}