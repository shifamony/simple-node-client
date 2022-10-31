import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    //this function is read
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  //DELETE FUNCTION
  const handleDelete = user => {
    const agree = window.confirm(`Are you sure you want to delete ${user.name}`);
    console.log(agree);
    if(agree){
        //console.log('deleting id', user._id);
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
        if(data.deletedCount > 0){
            alert('user deleted successfully');
            const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
            setDisplayUsers(remainingUsers);
        }
        });
    }
  }
    return (
        <div>
            <h1>This is home</h1>
            <h1>Users : {displayUsers.length}</h1>
            <div>
                {
                displayUsers.map(user => <p key={user._id}>
                    {user.name} {user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(user)}>X</button>
                </p>)
                }
            </div>
        </div>
    );
};

export default Home;