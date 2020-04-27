import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);

  return (
    <div>
      <p>{resources.length}</p>
    </div>
  );
};

export default ResourceList;

// {resources.map(({id, title}) => <p key={id}>{title}</p>)}
