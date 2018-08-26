import listSagas from '../ListContact/sagas';
import addSagas from '../AddContact/sagas';
import editSagas from '../EditContact/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([listSagas(), addSagas(), editSagas()]);
}
