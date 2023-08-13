import { fork } from 'redux-saga/effects';
import vehicleSaga from 'store/saga/vehicleSaga';

export default function* rootSaga() {
  yield fork(vehicleSaga);
}
