Posts = new Mongo.Collection("posts");

Posts.friendlySlugs(
	{
		slugFrom: 'title',
		slugField: 'slug',
		distinct: true,
		updateSlug: true
	}
);

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Post Title:"
	},
	content: {
		type: String,
		label: "Post Content:",
		autoform: {
			afFieldInput: {
				type: "textarea"
			}
		}
	},
	userId: {
		type: String,
		autoValue: function(){return Meteor.userId()}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	}
}));

Posts.allow({
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