import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);
    fetch('http://localhost:5000/users',{
      method: 'POST', // or 'PUT'

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(user),
      })

    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      const newUsers = [...users, data];
      setUsers(newUsers);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    form.reset();

  }


  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <br /><br />
        <input type="text" name='name' placeholder='Your Name' />
        <br /><br />
        <input type="email" name='email' placeholder='Your email' />
        <br /><br />
        <button>Add User</button>
      </form>
     <h1>users: {users.length}</h1>
     <div>
    {
        users.map(user => <p key={user._id}>{user.name} {user.email}</p>)
    }
     </div>
    </div>
  );
}

export default App;
