import reducer from '../reducer';

describe('List contact reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      all: []
    };

    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle GET_CONTACTS_REQUEST', () => {
    const expectedState = {
      all: []
    };

    expect(reducer(undefined, { type: 'GET_CONTACTS_REQUEST' })).toEqual(
      expectedState
    );
  });

  it('should handle GET_CONTACTS_SUCCESS', () => {
    const mock = [{ id: 'aaaa', firstName: 'some', lastname: 'thing' }];

    const expectedState = {
      all: undefined
    };

    expect(reducer(undefined, { type: 'GET_CONTACTS_SUCCESS' })).toEqual(
      expectedState
    );
  });
});
