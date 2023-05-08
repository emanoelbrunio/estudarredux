export function addReserve(trip){

    return {
        type: 'ADD_RESERVE',
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