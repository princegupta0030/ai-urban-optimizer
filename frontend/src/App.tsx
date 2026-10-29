import { useEffect, useState } from 'react'
import './App.css'

interface HealthResponse {
  status: string;
  message: string;
}

function App() {
  const [healthStatus, setHealthStatus] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = () => {
      fetch('http://localhost:8000/health')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setHealthStatus(data);
          setError(null);
        })
        .catch(err => {
          setError('Failed to connect to backend: ' + err.message);
          setHealthStatus(null);
        });
    };

    fetchHealth();
    const intervalId = setInterval(fetchHealth, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>URBANPULSE AI</h1>
        <p>An AI Digital Twin for Self-Optimizing Indian Cities</p>

        <div className="status-box">
          <h3>Backend Connection Status:</h3>
          {error ? (
            <p className="error" style={{ color: 'red' }}>Disconnected - {error}</p>
          ) : healthStatus ? (
            <p className="success" style={{ color: 'green' }}>
              Connected! Status: {healthStatus.status}, Message: {healthStatus.message}
            </p>
          ) : (
            <p>Connecting to backend...</p>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
