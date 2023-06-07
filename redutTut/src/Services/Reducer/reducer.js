import React from 'react'
import { Add_To_Cart } from '../Constants';

const initialState={
    cardData:[]
}
const cardItem = (initialState, action) => {
    switch(action.type){
        case Add_To_Cart:
            return{
                ...initialState,
                cardData: action.data
            }
            break;
            default:
                return state
    }

}

export default cardItem;