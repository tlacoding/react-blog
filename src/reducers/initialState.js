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
      username: null,
      password: null
    },
    sending: false,
    loggedIn: false,
    userInfo: {}
  }
};