const initialState = {
  modalOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { ...state, modalOpen: !state.modalOpen };

    default:
      return state;
  }
};
export default reducer;
