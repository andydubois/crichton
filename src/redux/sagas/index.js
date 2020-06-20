import {all} from 'redux-saga/effects';
import dinoSaga from './dinoSaga'

export default function* rootSaga() {
    yield all([
        dinoSaga()
    ])
}