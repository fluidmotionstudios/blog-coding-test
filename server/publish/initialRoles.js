Meteor.startup(function() {
	if(Meteor.users.find().count() <1) {
		var id = Accounts.createUser({
			email: 'admin@admin.com',
			password: 'adminadmin',
			profile: {name: 'Administrator'}
		});
		Roles.addUsersToRoles(id,'admin');
	}
});