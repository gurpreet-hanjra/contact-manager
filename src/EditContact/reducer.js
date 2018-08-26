import { head } from 'ramda';

const initialState = {
  toEdit: {},
  updateContactSuccess: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_CONTACT_REQUEST':
      return { ...state };
    case 'EDIT_CONTACT_SUCCESS':
      const itemToEdit = head(action.response) || {};
      return { ...state, toEdit: itemToEdit, updateContactSuccess: false };

    case 'UPDATE_CONTACT_REQUEST':
      return { ...state };
    case 'UPDATE_CONTACT_SUCCESS':
      return { ...state, updateContactSuccess: true, toEdit: {} };

    default:
      return state;
  }
};
export default reducer;
