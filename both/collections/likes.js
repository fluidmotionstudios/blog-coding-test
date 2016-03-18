Likes = new Mongo.Collection('likes');

Likes.allow({
  insert: function(userId, doc){
    return true;
  },
  update: function(userId, doc, fields){
    return true;
  },
  remove: function(){
    return true;
  }
});