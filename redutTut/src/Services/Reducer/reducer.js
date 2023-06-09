
import { Add_To_Cart, Remove_From_Cart } from '../Constants';

const initialState = {
    cardData: []
}
const cardItem = (state = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            console.log(action)
            return [
                ...state,
                { cardData: action.data }
            ]
        case Remove_From_Cart:
          
            state.pop();
            return [
                ...state,
                
            ]

        default:
            return state
    }

}

export default cardItem;