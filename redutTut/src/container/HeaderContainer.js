
import { connect } from 'react-redux';
import Header from '../components/Header'
//import { addToCart } from '../Services/Action/action';
const mapStateToProps=state=>(
        {
            cardData:state.cardItem
        }
    
)
const mapDispatchtoProps=dispatch=>({

})
export default connect(mapStateToProps,mapDispatchtoProps)(Header)
