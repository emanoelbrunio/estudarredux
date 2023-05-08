import { produce } from "immer";

//imutabilidade: uma vez que o objeto é criado, não pode ser modificado, caso seja necessario mudar, deve-se fazer uma cópia do objeto com a mudança
function reserve(state = [], action){
    
    switch(action.type){
        case 'ADD_RESERVE': 
            return produce(state, draft => {

                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id );

                if (tripIndex >= 0){
                    draft[tripIndex].amount += 1;
                }
                else {
                    draft.push({
                        ...action.trip,
                        amount: 1
                    })
                }
            })

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id );

                if (tripIndex >= 0){
                    draft.splice(tripIndex, 1)
                }
            })

        case 'DECREMENT_AMOUNT':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if (tripIndex >= 0){
                    if (draft[tripIndex].amount > 1){
                        draft[tripIndex].amount -= 1;
                    }
                }
            })
            
        case 'INCREMENT_AMOUNT':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if (tripIndex >= 0){
                    draft[tripIndex].amount += 1;
                }
            })

        default:
            return state;
    }

}

export default reserve;