import { all, call, put, takeEvery } from 'redux-saga/effects';
import LocalStorageManager from 'ls-manager';

export function* addContact(payload) {
  const response = yield call([LocalStorageManager, 'setItem'], payload.data);
  if (response) {
    yield put({ type: 'ADD_CONTACT_SUCCESS', data: true });
    yield put({ type: 'GET_CONTACTS_REQUEST' });
  } else {
    yield put({ type: 'ADD_CONTACT_ERROR' });
  }
}

export default function* watchAddContact() {
  yield all([takeEvery('ADD_CONTACT_REQUEST', addContact)]);
}
