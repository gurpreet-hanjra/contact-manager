import { getContactsRequest, getContactsSuccess } from '../actions';

describe('List contact actions', () => {
  it('should create an action to request contacts', () => {
    const expectedAction = {
      type: 'GET_CONTACTS_REQUEST'
    };

    expect(getContactsRequest()).toEqual(expectedAction);
  });

  it('should create an action to get success contacts', () => {
    const expectedAction = {
      type: 'GET_CONTACTS_SUCCESS'
    };

    expect(getContactsSuccess()).toEqual(expectedAction);
  });
});
