import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

function App() {
  const [useResource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={useResource} />
    </div>
  );
}

export default App;
