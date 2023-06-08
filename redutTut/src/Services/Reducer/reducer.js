import React from 'react'
import { Add_To_Cart } from '../Constants';

const initialState={
    cardData:[]
}
const cardItem = (state=[], action) => {
    switch(action.type){
        case Add_To_Cart:
            console.log(action)
            return[
                ...state,
               {cardData: action.data}
            ]
            break;
            default:
                return state
    }

}

export default cardItem;