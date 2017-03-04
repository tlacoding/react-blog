export default {
  post: {
    postsList: {
      posts: [],
      loading: true,
      error: null
    },
    activePost: {
      post: null,
      error: null,
      loading: true
    }
  },
  auth: {
    formState: {
      username: '',
      password: ''
    },
    sending: false,
    loggedIn: false,
    user: null,
    error: null
  }
};