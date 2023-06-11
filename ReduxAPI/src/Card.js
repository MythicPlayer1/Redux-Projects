import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div style={{width:'350px',height:'100',background:'#F0F8FF',borderRadius:'5px',boxShadow: '5px 5px 30px 3px rgba(255, 255, 255, .3)' ,margin:'20px', display:'flex', flexDirection:'column', color:'black'}}>
      <div>
        <h1 style={{fontSize:'13px', float:'left', paddingLeft:'10px'}}>Name:{props.login}</h1>
      </div>
      <div style={{fontSize:'13px',display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'10px'}}>
        <p>id:{props.id}</p>
        <p>URL:{props.url}</p>
        <p>folowers:{props.follower}</p>
        <p>Type:{props.type}
        </p>

      </div>
    </div>
  )
}

export default Card