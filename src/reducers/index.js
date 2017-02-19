import { combineReducers } form 'redux';
import posts from './postsReducer';

const rootReducer = combineReducers({
  posts
});

export default rootReducer;