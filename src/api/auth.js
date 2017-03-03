import * as firebase from 'firebase';

class Auth {
  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
      return error.message;
    });
  }

  loggedIn() {
    firebase.auth().onAuthStateChanged(function(user) {
      return ((user) ? true : false);
    });
  }

  logout() {
    return firebase.auth().signOut();
  }
}

export default Auth