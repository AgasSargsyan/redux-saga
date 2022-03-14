import { put, takeEvery } from 'redux-saga/effects'
import { addCashAction } from '../store/cashReducer'
 
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(addCashAction(5))
}

export function* cashWatcher() {
    yield takeEvery("ASYNC_ADD_CASH", incrementWorker)
}