
import { connect } from 'react-redux';
import home from '../components/home'
import { addToCart } from '../Services/Action/action';
const mapStateToProps=state=>{
    return(
        {
            cardData:state.cardItem
        }
    );
}

const mapDispatchtoProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchtoProps)(home)
