import { call, put, takeEvery } from 'redux-saga/effects'
import { setUsers } from '../store/userStore'
import { FEATCH_SET_USERS } from '../store/userStore'

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsers)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* userWatcher() {
    yield takeEvery(FEATCH_SET_USERS, fetchUserWorker)
}