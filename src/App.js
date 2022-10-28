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
    console.log(name,email);
    form.reset();
  }


  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' />
        <input type="email" name='email' />
        <button>Submit</button>
      </form>
     <h1>users: {users.length}</h1>
     <div>
    {
        users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
    }
     </div>
    </div>
  );
}

export default App;
