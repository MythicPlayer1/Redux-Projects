import React from 'react'

const home = (props) => {
    console.warn(props.cardData)
  return (
    <div style={{display:'flex', justifyContent:'space-between', padding:'30px'}}>
       
    <div style={{border:"1px solid", height:'400px', width:'300px'}}>
        <img style={{width:'100px',height:'200px',}} src='https://i.pinimg.com/564x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg' alt=''></img>
        <p>name= iphone13 pro max</p>
        <p>price= $2000</p>
        <button onClick={()=>props.addToCartHandler({price:'100000', name:"iphone"})}>add to cart</button>
        <button onClick={()=>props.removeFromCartHandler()}>Remove From Cart</button>
    </div>
   
</div>
   
  )
}

export default home