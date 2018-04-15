import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentDidMount() {
      if (!this.props.authenticated) {
        <Link to="/dashboard" />
      }
      <Link to="/signin" />
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth) {
        <Link to="/signin" />
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { auth: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}