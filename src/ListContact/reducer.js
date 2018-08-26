const initialState = {
  all: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_REQUEST':
      return { ...state };
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state,
        all: action.data
      };

    case 'SORT_CONTACTS_REQUEST':
      return { ...state };
    case 'SORT_CONTACTS_SUCCESS':
      return {
        ...state,
        all: action.data
      };

    case 'FILTER_CONTACTS_REQUEST':
      return { ...state };
    case 'FILTER_CONTACTS_SUCCESS':
      return {
        ...state,
        all: action.data
      };

    default:
      return state;
  }
};
export default reducer;
