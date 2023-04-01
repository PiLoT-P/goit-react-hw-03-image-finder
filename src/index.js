import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';


class ErrorBoundary extends Component{
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Упсс. Помилка</h1>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
