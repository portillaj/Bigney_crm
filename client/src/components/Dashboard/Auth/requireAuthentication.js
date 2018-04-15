import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentDidMount() {
            if(!this.props.Authenticated) {
                this.props.history('/signin');
            }
        }
        componentWillMount(nextProps) {
            if(!nextProps.Authenticated) {
                this.props.history('/signin');
            }
        }
        render() {
            console.log(this.props);
            return <ComposedComponent { ...this.props } />
        }
    }
    function mapStateToProps(state) {
        return { Authenticated: state.Authenticated }
    }
return connect(mapStateToProps)(Authentication);
}