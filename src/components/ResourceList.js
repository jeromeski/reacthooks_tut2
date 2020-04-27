import React from 'react';
import userResources from './userResources'



const ResourceList = ({ resource }) => {
  const resources = userResources(resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

// {resources.map(({id, title}) => <p key={id}>{title}</p>)}

/*
const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  })(resource);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource]);
  return (
    <div>
      <p>{resources.length}</p>
    </div>
  );
};

export default ResourceList;

*/
