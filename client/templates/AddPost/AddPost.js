AutoForm.addHooks('insertPostForm', {
  onSuccess: function () {
    Router.go('/posts')
  }
});