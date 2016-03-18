Template.Posts.helpers({
	posts: function() {
		return Posts.find({}, {sort:{createdAt: -1}});
	}//,
	//numLikes: function() {
		//return Likes.find({post: this._id}).count();
	//},
	//likesThis:function() {
		//var doeslike = Likes.findOne({userId:Meteor.userId(),post:this._id});
		//if (doeslike) {
			//return 'You liked this';
		//}
	//}
});

Template.Posts.events({
'click .like':function(event, template){
	var curlike = Likes.findOne({ userId:Meteor.userId(), post: this._id});
	if (!curlike) {
		Likes.insert({userId:Meteor.userId(),post: this._id});
	}
	Session.set('updated',new Date());
}
});

Template.Posts.onCreated(function () {
	//add your statement here
});

Template.Posts.onRendered(function () {
	//add your statement here
});

Template.Posts.onDestroyed(function () {
	//add your statement here
});

