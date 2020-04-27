import React, { Component } from 'react';
import axios from 'axios';

class ResourceList extends Component {

  state = {
    resource: []
  }
  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({resources: response.data})
    
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      this.setState({resource: response.data})
    }
  }

  render() {
    const {resource} = this.state
    return (
      <div>
        <p>{resource.length}</p>
      </div>
    );
  }
}

export default ResourceList;

// {resources.map(({id, title}) => <p key={id}>{title}</p>)}