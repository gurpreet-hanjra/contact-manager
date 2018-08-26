const initialState = {
  addContactSuccess: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_REQUEST':
      return {
        ...state,
        addContactSuccess: false
      };
    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        addContactSuccess: true
      };

    default:
      return state;
  }
};
export default reducer;
