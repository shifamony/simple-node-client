import React from 'react';
import { useState } from 'react';

const AddUsers = () => {
const [user, setUser] = useState({})
const handleUsers = (e) => {
   e.preventDefault();
   console.log(user);

//this function take us to server
   fetch('http://localhost:5000/users',{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        
})
   .then(res => res.json())
   .then(data => {
    //show database
    //console.log('Success', data);
    if(data.acknowledged){
     alert('User added successfully');
     e.target.reset();
    }else{alert('User not add')}
    
   })
//this function take us to server end

}

const handleInputs = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const newUser = {...user};
    newUser[field] = value;
    setUser(newUser);
    
}

    return (
        <div>
            <h1>Add Users ars here</h1>
            <div>
                <form onSubmit={handleUsers}>
                    <input onBlur={handleInputs} type="text" name='name' placeholder='Enter your name' required />
                       <br /><br />

                       <input onBlur={handleInputs} type="text" name='address' placeholder='Enter your address' required />
                       <br /><br />

                    <input onBlur={handleInputs} type="email" name='email' placeholder='Enter your email' required />
                       <br /><br />
                    <button>Add Users</button>
                </form>
            </div>
        </div>
    );
};

export default AddUsers;