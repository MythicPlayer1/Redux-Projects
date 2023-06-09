
import { Add_To_Cart, Remove_From_Cart } from "../Constants"
export const addToCart = (data) => {
    console.log(data)
    return (
        {
            type: Add_To_Cart,
            data: data,

        }
    )
}

export const removeFromCart=(data)=>{
    return(
        {
            type: Remove_From_Cart,
        }
    )
}