import React, { useReducer, useState } from 'react';

const initialState = { user: null };

const reducer =(state, action)=> {
  switch (action.type) {
    case 'login':
      return { user: action.payload };
    case 'logout':
      return { user: null };
    default:
      throw new Error();
  }
}

 const UserAuthentication=()=> {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username) {
      dispatch({ type: 'login', payload: username });
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <div>
      {state.user ? (
        <div>
          <p>Welcome, {state.user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserAuthentication;