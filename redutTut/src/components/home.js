import React from 'react'

const home = (props) => {
    console.warn(props.cardData)
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'30px'}}>
        <span style={{position:'absolute', top:'20px',right:'20px',height:'25px', width:'30px', background:'red',borderRadius:'50%', color:'white', paddingTop:'5px'}}>{props.cardData.length}</span>
    <div style={{border:"1px solid", height:'400px', width:'300px'}}>
        <img style={{width:'100px',height:'200px',}} src='https://i.pinimg.com/564x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg' alt=''></img>
        <p>name= iphone13 pro max</p>
        <p>price= $2000</p>
        <button onClick={()=>props.addToCartHandler({price:'100000', name:"iphone"})}>add to cart</button>
    </div>
    <div>
        <img  style={{height:'50px', width:'50px',}  }src='cart-icon-28356.png' alt=''></img>
    </div>

</div>
   
  )
}

export default home