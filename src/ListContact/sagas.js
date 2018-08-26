import { all, call, put, takeLatest } from 'redux-saga/effects';
import LocalStorageManager from 'ls-manager';

export function* getContacts() {
  const contacts = yield call([LocalStorageManager, 'getAllItems']);
  yield put({ type: 'GET_CONTACTS_SUCCESS', data: contacts });
}

export function* sortContacts(payload) {
  const sorted = yield call([LocalStorageManager, 'sort'], payload.data);
  yield put({ type: 'SORT_CONTACTS_SUCCESS', data: sorted });
}

export function* filterContacts(payload) {
  const filtered = yield call([LocalStorageManager, 'filter'], payload.data);
  yield put({ type: 'FILTER_CONTACTS_SUCCESS', data: filtered });
}

export default function* watchGetContacts() {
  yield all([
    takeLatest('GET_CONTACTS_REQUEST', getContacts),
    takeLatest('SORT_CONTACTS_REQUEST', sortContacts),
    takeLatest('FILTER_CONTACTS_REQUEST', filterContacts)
  ]);
}
