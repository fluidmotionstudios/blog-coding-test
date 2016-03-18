Template.NavBar.helpers({
	email: function() {
		return Meteor.user().emails[0].address;
	}
});

Template.NavBar.events({
	'click #logout': function(event){
		AccountsTemplates.logout();
	}
});

Template.NavBar.onCreated(function () {
	//add your statement here
});

Template.NavBar.onRendered(function () {
	//add your statement here
});

Template.NavBar.onDestroyed(function () {
	//add your statement here
});

