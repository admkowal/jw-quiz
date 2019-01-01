import { Component } from 'react';

export default class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  render() {
    return this.props.children;
  }
}