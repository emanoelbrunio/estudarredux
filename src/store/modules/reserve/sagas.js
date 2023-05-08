import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import { addReserveSuccess, incrementAmountSuccess } from './actions'
import api from '../../../services/api'
import history from '../../../services/history'

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
    
    const myStock = yield call(api.get, `/stock/${id}`);
    const stockAmount = myStock.data.amount;
        
    //se a viagem existe, só incremento o amount
    if (tripExist){
        if(tripExist.amount < stockAmount){
            yield put(incrementAmountSuccess(tripExist))
            history.push('/reservas')
        }
        else {
            alert('Você atingiu a quantida máxima do estoque')
        }
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
        history.push('/reservas')

    }
}

function* incrementAmount({ trip }){
    const myStock = yield call(api.get, `/stock/${trip.id}`);
    const stockAmount = myStock.data.amount;

    trip.amount < stockAmount ? yield put(incrementAmountSuccess(trip)) : alert(`Você atingiu a quantida máxima disponivel em estoque de: ${trip.title}`)
}

// all dispara listeners, fica ouvindo, onde recebe uma ou mais listener
export default all([
    // takeLastest só pega a ultima chamada, a ultima requisição, caso seja clicado varias vezes
    // takeevery faz uma req. pra cada clique
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('INCREMENT_AMOUNT_REQUEST', incrementAmount)
])