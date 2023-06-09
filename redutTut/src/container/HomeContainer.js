
import { connect } from 'react-redux';
import home from '../components/home'
import { addToCart, removeFromCart } from '../Services/Action/action';
const mapStateToProps=state=>(
        {
            cardData:state.cardItem
        }
    
)

const mapDispatchtoProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeFromCartHandler: data=>dispatch(removeFromCart(data))
})
export default connect(mapStateToProps,mapDispatchtoProps)(home)
