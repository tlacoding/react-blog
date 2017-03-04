import * as firebase from 'firebase';

class Auth {
  /**
   * Logs a user in, return firebase.User when done or error when fail
   * @param {string} username - The username of user
   * @param {string} password - The password of user
   */
  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
      return error;
    });
  }

  /**
   * Check if user is logged in
   */
  loggedIn() {
    firebase.auth().onAuthStateChanged(function(user) {
      return ((user) ? true : false);
    });
  }

  /**
   * Logs a user out
   */
  logout() {
    return firebase.auth().signOut();
  }
}

export default Auth