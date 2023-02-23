import { useState } from 'react';

function UserForm({ onUserAdd }) {
    const [state, setState] = useState({ name: '', email: ''});
    const submit = () => {
        onUserAdd(state);
    }
    return <div>
        <div>
        <label>Name</label>
            <input value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
        </div>
        <div>
            <label>Email</label>
            <input value={state.email} onChange={(e) => setState({...state, email: e.target.value})}/>
        </div>
        <button onClick={submit}>Add User</button>
    </div>
}

export default UserForm;