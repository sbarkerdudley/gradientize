import React, { Component } from 'react';
import { LoadingOverlay } from '@mantine/core';
import axios from 'axios';
import { Spotify } from '../spotify'
import Colorize from './Colorize'

export default class Resource extends Component {
  constructor(props) {
    super(props)
    this.baseURL = 'https://api.spotify.com/v1';
    this.state = {
      items: [],
      loading: true,
      hasError: false,
    };
    this.action = this.props.action.bind(this)
    this.path = this.props.path || ''
    this.ops = this.props.opts || {}
  }

  componentDidMount() {
    try {
      this.action(this.path, this.opts)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Bad Request')
          }
          return response.data
        })
        .then((data) => {
          console.log({data});
          return data
        })
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
      console.log(error.message || error);
      this.setState(state => ({
        ...state,
        loading: false,
        hasError: true,
      }))
    }
  }

  render() {
    if (this.state.loading) {
      return <LoadingOverlay />
      return <h1>LOADING</h1>
    } else if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>ERROR</h1>
    } else {
      return this.props.render(this.state)
    }
  }
}
