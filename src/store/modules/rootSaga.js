import { all } from 'redux-saga/effects'

import reserve from './reserve/sagas'

//analogo ao combineReducers
export default function* rootSaga(){
    return yield all([
        reserve,
    ])
}