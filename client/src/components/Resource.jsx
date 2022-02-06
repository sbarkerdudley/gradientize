import React, { Component } from 'react';
import axios from 'axios';
import { Spotify } from '../spotify'

export default class Resource extends Component {
  constructor(props) {
    super(props)
    this.baseURL = 'https://api.spotify.com/v1';
    this.state = {
      items: [],
      loading: true,
      hasError: false,
    };
  }

  componentDidMount() {
    try {
      this.props.action(this.props.path || '')
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Bad Request')
          }
          return response.data})
        .then(data => {
          this.setState(state => ({
            ...state,
            ...data,
            loading: false,
            hasError: false,
          }))
        })
        .catch((err) => { throw new Error(err) })

    } catch (error) {
      console.log(error);
      this.setState(state => ({
        ...state,
        loading: false,
        hasError: true,
      }))
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>LOADING</h1>
    } else if (this.state.hasError) {
      return <h1 style={{color: 'red'}}>ERROR</h1>
    } else {
      return this.props.render(this.state)
    }
  }
}
