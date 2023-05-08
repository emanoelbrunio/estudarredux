import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import './style.css'

import { removeReserve, decrementAmount, incrementAmount } from '../../store/modules/reserve/actions'

function Reservas() {
    const dispatch  = useDispatch();
    const reserves = useSelector(state => state.reserve)

    function handleRemove(id){
        dispatch(removeReserve(id))
    }

    function decrementingAmount(trip){
        dispatch(decrementAmount(trip))
    }
    function incrementingAmount(trip){
        dispatch(incrementAmount(trip))
    }
    return (
        <div>
            <h1 className='title'>Você solicitou {reserves.length} reserva</h1>

            {
                reserves.map(reserve => (

                    <div className='reservas' key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title}/>
                        <strong> { reserve.title }</strong>

                        <div id='amount'>
                            <button type='button' onClick={()=> decrementingAmount(reserve)}>
                                <MdRemoveCircle size={25} color='#191919'/>
                            </button>
                            <input type='text' readOnly value={reserve.amount} />
                            <button type='button' onClick={()=> incrementingAmount(reserve)}>
                                <MdAddCircle size={25} color='#191919'/>
                            </button>
                        </div>

                        <button type='button' onClick={()=> handleRemove(reserve.id)}>
                            <MdDelete size={20} color='#191919' />
                        </button>
                    </div>
                ))
            }

            <footer>
                <button type='button'>Solicitar reservas</button>
            </footer>
        </div>
 );
}

export default Reservas;