import React from 'react'

const Header = (props) => {
    console.warn(props.cardData)
    return (
        <div>
            <div>
                <img style={{ height: '50px', width: '50px', }} src='cart-icon-28356.png' alt=''></img>
            </div>
            <span style={{position:'absolute', top:'20px',right:'20px',height:'25px', width:'30px', background:'red',borderRadius:'50%', color:'white', paddingTop:'5px'}}>{props.cardData.length}</span>
        </div>
    )
}

export default Header