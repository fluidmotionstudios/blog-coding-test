Template.UserPosts.helpers({
	posts: function () {
		return Posts.find({userId: Meteor.userId()}, {sort:{createdAt: -1}});
	}
});

Template.UserPosts.events({
	'click #deletePost': function () {
		Posts.remove(this._id);
	},
	'click #editPost': function () {
		Router.go('/manage/posts/'+this._id)
	}
});

Template.UserPosts.onCreated(function () {
	//add your statement here
});

Template.UserPosts.onRendered(function () {
	//add your statement here
});

Template.UserPosts.onDestroyed(function () {
	//add your statement here
});

