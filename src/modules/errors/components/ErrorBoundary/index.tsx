import React, { Component } from 'react';

import { logger } from '~modules/logger/services';

import RuntimeError from '../../RuntimeError';
import ErrorScreen from '../ErrorScreen';

import type { ErrorInfo } from 'react';

class ErrorBoundary extends Component<React.PropsWithChildren> {
  public state = {
    hasError: false,
  };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const runtimeError = RuntimeError.fromOriginal(error, 'UnknownException', error.toString());

    runtimeError.addDetail('componentStack', errorInfo);
    logger.logError('GLOBAL', runtimeError);
  }

  handleDismiss = (): void => {
    this.setState({ hasError: false });
  };

  render(): React.ReactNode {
    if (this.state.hasError) return <ErrorScreen onDismiss={this.handleDismiss} />;

    return this.props.children;
  }
}

export default ErrorBoundary;
