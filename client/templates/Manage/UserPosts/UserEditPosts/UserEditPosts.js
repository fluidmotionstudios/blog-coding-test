AutoForm.addHooks('updatePostForm', {
  onSuccess: function () {
    Router.go('/manage/posts')
  }
});