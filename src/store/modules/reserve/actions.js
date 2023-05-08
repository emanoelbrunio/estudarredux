export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

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

export function incrementAmount(trip){
    return {
        type: 'INCREMENT_AMOUNT',
        trip,
    }
}