import { combineReducers } from 'redux';
import User from './User';
import Search from './Search';
export default combineReducers({
  user: User,
  search: Search,
});
