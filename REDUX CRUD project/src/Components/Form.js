import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../Reducers/Slice';

const Form = () => {
    const [user, setUser]=useState({});
    


    const dispatch=useDispatch()
    const getUserData=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const submitHandler=(Event)=>{
        Event.preventDefault()
        setUser(user)
        console.log(user)
        dispatch(createUser(user));  
    }
   
    
    return (
        <div>
            <form className='w-50 mx-auto my-5 ' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Name of Product</label>
                    <input type="text" className="form-control" name='Name' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getUserData}></input>
                        <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Description</label>
                    <input type="text" className="form-control" name='ProductInfo' id="exampleInputPassword1" onChange={getUserData}></input>
                </div>
                {/* <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Image</label>
                    <input alt='' type="image" class="form-control" id="exampleInputPassword1"></input>
                </div> */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                    <input type="number" className="form-control" name='Quantity' id="exampleInputPassword1" onChange={getUserData}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">userDetails</label>
                    <input type="text" className ="form-control" name='userName' id="exampleInputPassword1" onChange={getUserData}></input>
                </div>
              
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form