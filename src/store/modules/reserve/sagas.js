import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { addReserveSuccess, incrementAmount } from './actions'
import api from '../../../services/api'

// * analogo ao async (generation)
//yield analogo ao await
function* addToReserve({ id }){

    // usar yeld toda vez que usa um side-effect
    const tripExist = yield select(
        //verificando se existe alguma viagem com o id passado e pegando esse objeto
        state => state.reserve.find((trip) => {
            return trip.id === id
        })
    );
    
    //se a viagem existe, só incremento o amount
    if (tripExist){
        yield put(incrementAmount(tripExist))
    }
    //se nao existe, faço uma req., pego os dados e add essa nova reserva
    else {
        const response = yield call(api.get, `trips/${id}`)
        const data = {
            ...response.data,
            amount: 1,
        }
        //put é para disparar actions
        yield put(addReserveSuccess(data))
    }
}

// all dispara listeners, fica ouvindo, onde recebe uma ou mais listener
export default all([
    // takeLastest só pega a ultima chamada, a ultima requisição, caso seja clicado varias vezes
    // takeevery faz uma req. pra cada clique
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])