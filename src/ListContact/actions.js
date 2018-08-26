export const getContactsRequest = () => ({
  type: 'GET_CONTACTS_REQUEST'
});

export const getContactsSuccess = data => ({
  type: 'GET_CONTACTS_SUCCESS',
  data
});

export const sortContactsRequest = data => ({
  type: 'SORT_CONTACTS_REQUEST',
  data
});

export const sortContactsSuccess = data => ({
  type: 'SORT_CONTACTS_SUCCESS',
  data
});

export const filterContactsRequest = data => ({
  type: 'FILTER_CONTACTS_REQUEST',
  data
});

export const filterContactsSuccess = data => ({
  type: 'FILTER_CONTACTS_SUCCESS',
  data
});
