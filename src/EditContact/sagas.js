import { all, call, put, takeEvery } from 'redux-saga/effects';
import LocalStorageManager from 'ls-manager';

export function* editContact(payload) {
  const response = yield call([LocalStorageManager, 'editItem'], payload.data);
  if (response) {
    yield put({ type: 'EDIT_CONTACT_SUCCESS', response });
  } else {
    yield put({ type: 'EDIT_CONTACT_ERROR' });
  }
}

export function* updateContact(payload) {
  const response = yield call(
    [LocalStorageManager, 'updateItem'],
    payload.data
  );
  if (response) {
    yield put({ type: 'UPDATE_CONTACT_SUCCESS', response });
    yield put({ type: 'GET_CONTACTS_REQUEST' });
  } else {
    yield put({ type: 'UPDATE_CONTACT_ERROR' });
  }
}

export default function* watchAddContact() {
  yield all([
    takeEvery('EDIT_CONTACT_REQUEST', editContact),
    takeEvery('UPDATE_CONTACT_REQUEST', updateContact)
  ]);
}
