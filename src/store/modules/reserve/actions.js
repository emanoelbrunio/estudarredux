//o saga escuta essa
export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

//o saga chama essa
export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    }
}

export function removeReserve(id){
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function decrementAmount(trip){
    return {
        type: 'DECREMENT_AMOUNT',
        trip,
    }
}


//o saga escuta essa
export function incrementAmountRequest(trip){
    return {
        type: 'INCREMENT_AMOUNT_REQUEST',
        trip,
    }
}
//o saga chama essa
export function incrementAmountSuccess(trip){
    return {
        type: 'INCREMENT_AMOUNT_SUCCESS',
        trip,
    }
}