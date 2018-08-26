import actions from '../actions';
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import localStorage from '../../testUtils/mock';
import { getContacts } from '../sagas';
import LocalStorageManager from 'local-storage-manager';

describe('Listcontact sagas', () => {
  let generator;
  beforeEach(() => {
    generator = cloneableGenerator(getContacts)();
  });
  it('should get contacts', () => {
    expect(generator.next().value).toEqual(
      call([LocalStorageManager, 'getAllItems'])
    );
  });
  it('credentials success', () => {
    const clone = generator.clone();
    // expect(clone.next(true).value).toEqual(
    //   put({ type: 'GET_CONTACTS_SUCCESS', data: [] })
    // );
    //expect(clone.next().done).toEqual(true);
  });
});
