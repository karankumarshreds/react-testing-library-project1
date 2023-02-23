import { useState } from 'react';
import UserForm from './UserForm';
import UsersList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserForm onUserAdd={(user) => setUsers([...users, user])} />
      <hr />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
