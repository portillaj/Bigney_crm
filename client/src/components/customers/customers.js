import React, { Component } from 'react';
import axios from 'axios';
import './customers.scss';

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/customers')
      .then((customers) => {
        this.setState({customers}, console.log('customers fetched...',
          customers.data));
      })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Customers</h1>
      </div>
    );
  }
}

export default Customers;