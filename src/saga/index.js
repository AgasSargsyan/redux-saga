import { all } from 'redux-saga/effects'
import { cashWatcher } from './countSaga'
import { userWatcher } from './userSaga'

export function* rootWatcher() {
    yield all([cashWatcher(), userWatcher()])
}