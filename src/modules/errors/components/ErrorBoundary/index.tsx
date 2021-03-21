import React, { Component, ErrorInfo } from 'react';

import { logger } from '~modules/logger/services';

import RuntimeError from '../../RuntimeError';
import ErrorScreen from '../ErrorScreen';

class ErrorBoundary extends Component {
  public state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const runtimeError = RuntimeError.fromOriginal(error, 'UnknownException', error.toString());

    runtimeError.addDetail('componentStack', errorInfo);
    logger.logError('GLOBAL', runtimeError);
  }

  handleDismiss = async () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) return <ErrorScreen onDismiss={this.handleDismiss} />;

    return this.props.children;
  }
}

export default ErrorBoundary;
