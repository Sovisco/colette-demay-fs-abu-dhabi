import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Error boundary: if anything crashes in the app, show a message instead of blank screen
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('App crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#050304',
          color: '#f0e6d2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          fontFamily: 'Georgia, serif',
          textAlign: 'center',
        }}>
          <div style={{ color: '#c9a572', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Colette Demay
          </div>
          <h1 style={{ fontWeight: 300, fontSize: '28px', fontStyle: 'italic', marginBottom: '20px', color: '#f0e6d2' }}>
            An unexpected error occurred.
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(240,230,210,0.7)', maxWidth: '400px', lineHeight: 1.6 }}>
            Please refresh the page. If the problem persists, try in a private browsing window.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '30px',
              padding: '12px 32px',
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              color: '#c9a572',
              border: '1px solid #c9a572',
              cursor: 'pointer',
            }}
          >
            Refresh
          </button>
          <details style={{ marginTop: '40px', fontSize: '11px', color: 'rgba(240,230,210,0.4)', maxWidth: '500px' }}>
            <summary style={{ cursor: 'pointer' }}>Technical details</summary>
            <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap', marginTop: '10px', fontSize: '10px' }}>
              {String(this.state.error)}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
