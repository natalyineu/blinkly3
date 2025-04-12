import React, { Component } from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 bg-red-50 border border-red-200 rounded-xl animate-fade-in-fast shadow-sm">
          <h3 className="text-red-800 font-medium mb-3 flex items-center">
            <AlertTriangle className="mr-2 flex-shrink-0" /> Something went wrong
          </h3>
          <p className="text-red-600 text-sm leading-relaxed">{this.state.error?.message || 'An unexpected error occurred'}</p>
          <button 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 