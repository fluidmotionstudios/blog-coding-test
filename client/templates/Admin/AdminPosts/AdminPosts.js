Template.AdminPosts.helpers({
	posts: function () {
		return Posts.find({}, {sort:{createdAt: -1}});
	}
});

Template.AdminPosts.events({
	'click #deletePost': function () {
		Posts.remove(this._id);
	},
	'click #editPost': function () {
		Router.go('/admin/posts/'+this._id)
	}
});

Template.AdminPosts.onCreated(function () {
	//add your statement here
});

Template.AdminPosts.onRendered(function () {
	//add your statement here
});

Template.AdminPosts.onDestroyed(function () {
	//add your statement here
});

