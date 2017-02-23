import * as firebase from 'firebase';

/**
* Fetch all posts from firebase
* @return { Array }
*/
export const fetchPosts = () => {
  let database = firebase.database();
  let postsRef = database.ref('posts');
  return postsRef.once('value').then((snapshot) => {
    let posts = [];
    snapshot.forEach(function(childSnapshot) {
      let key = childSnapshot.key;
      let childData = childSnapshot.val();
      posts.push({...{key}, ...childData});
    });
    return { type: 'success', payload: posts};
  })
  .catch((error) => {
    return { type: 'error', payload: error};
  });
};

/**
* Fetch post detail from post id
* @params { string } postId
* @return { Object }
*/
export const fetchPost = (postId) => {
  let database = firebase.database();
  let postsRef = database.ref('posts/' + postId);
  return postsRef.once('value').then((snapshot) => {
    return snapshot.val();
  })
  .catch((error) => {
    return error;
  });
};

/**
 * Add new post with generated key
 * @params { Object } data
 */
export const createPost = (data) => {
  let database = firebase.database();
  let postsRef = database.ref('posts');
  let newPost = postsRef.push();
  newPost.set(data).then(() => {
    console.log('Synchronization succeeded');
  })
  .catch((error) => {
    console.log('Synchronization failed', error);
  });
};