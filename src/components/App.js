import React, { useState } from 'react';
import ResourceList from './ResourceList';

function App() {
  const [ useResource, setResource ] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={useResource}/>
    </div>
  );
}

export default App;
