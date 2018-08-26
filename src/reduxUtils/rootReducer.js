import { combineReducers } from 'redux';
import add from '../AddContact/reducer';
import edit from '../EditContact/reducer';
import list from '../ListContact/reducer';
import modal from '../UI/Modal/reducer';

export default combineReducers({
  add,
  edit,
  list,
  modal
});
