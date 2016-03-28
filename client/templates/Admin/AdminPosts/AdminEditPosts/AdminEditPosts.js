AutoForm.addHooks('updatePostForm', {
  onSuccess: function () {
    Router.go('/admin/posts')
  }
});