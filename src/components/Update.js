import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storeUser = useLoaderData();

    const [user, setUser] = useState(storeUser);
    const handleUpdateUsers = (e) => {
       e.preventDefault();
       console.log(user);
    
    //this function take us to server
    fetch(`http://localhost:5000/users/${storeUser._id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        alert('user updated');
        console.log(data);
       
      }
     
    
    })
       
    //this function take us to server end
    
    }
    
    const handleInputsChange = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
        
    }
    
    return (
        <div>
            <h1>Update User: {storeUser.name}</h1>
            <form onSubmit={handleUpdateUsers}>
                    <input onChange={handleInputsChange} defaultValue={storeUser.name} type="text" name='name' placeholder='Enter your name' required />
                       <br /><br />

                       <input onChange={handleInputsChange} defaultValue={storeUser.address} type="text" name='address' placeholder='Enter your address' required />
                       <br /><br />

                    <input onChange={handleInputsChange} defaultValue={storeUser.email} type="email" name='email' placeholder='Enter your email' required />
                       <br /><br />
                    <button>Add Users</button>
                </form>
        </div>
    );
};

export default Update;