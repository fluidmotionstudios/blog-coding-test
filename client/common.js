Meteor.subscribe("posts");
Meteor.subscribe("likes");

Template.registerHelper('numLikes', function(){
  return Likes.find({post: this._id}).count();
});

Template.registerHelper('likesThis', function(){
  var doeslike = Likes.findOne({userId:Meteor.userId(),post:this._id});
  if (doeslike) {
    return 'You liked this';
  }
});

Template.registerHelper('totPosts', function(){
  return Posts.find().count();
});

Template.registerHelper('totUserPosts', function(){
  return Posts.find({userId:Meteor.userId()}).count();
});