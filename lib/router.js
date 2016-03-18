//Router.route('/', function () {
	//this.render('Home', {
		//data: function () { return Items.findOne({_id: this.params._id}); }
	//});
//});

Router.configure({
	layoutTemplate: 'AppLayout'
});


Router.route('/', {
	template: 'Posts'
});

Router.route('/addpost', {
	template: 'AddPost'
});

Router.route('/posts', {
	template: 'Posts'
});

//Router to AdminPanel
Router.route('/admin', function() {
	if(Roles.userIsInRole(Meteor.user(),'admin')){
		this.render('AdminPanel')
	}else{
	Router.go('/');
	}
});

//Route to AdminPosts section
Router.route('/admin/posts', function() {
	if(Roles.userIsInRole(Meteor.user(),'admin')){
		this.render('AdminPosts')
	} else {
		Router.go('/');
	}
});

//Route to AdminEditPosts
Router.route('/admin/posts/:_id', function () {
	if(Roles.userIsInRole(Meteor.user(),'admin')){
		this.render('AdminEditPosts', {
			data: function () { return Posts.findOne({_id: this.params._id}); }
		});
	} else {
		Router.go('/');
	}
});

//Route to User ControlPanel
Router.route('/control-panel', function() {
	if(Meteor.user()){
		this.render('ControlPanel')
	} else {
		Router.go('/');
	}
});


//Route to UserPosts section
Router.route('/manage/posts', function() {
	if(Meteor.user()){
		this.render('UserPosts')
	} else {
		Router.go('/');
	}
});


//Route to UserEditPosts
Router.route('/manage/posts/:_id', function () {
	if(Meteor.user()){
		this.render('UserEditPosts', {
			data: function () { return Posts.findOne({_id: this.params._id}); }
		});
	} else {
		Router.go('/');
	}
});

Router.route('/post/:slug', {
	name: 'post',
	waitOn: function() {
		return this.subscribe('posts', this.params.slug);
	},
	data: function() {
		return Posts.findOne({
			slug: this.params.slug
		});
	}
});


//Accounts Routing for useraccounts:iron-routing
AccountsTemplates.configureRoute('signUp', {
	template: 'Signup',
	layoutTemplate: 'AppLayout',
	redirect: '/posts'
});

AccountsTemplates.configureRoute('signIn', {
	template: 'Signin',
	layoutTemplate: 'AppLayout',
	redirect: '/posts'
});