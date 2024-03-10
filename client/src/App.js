import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api/demo').then((res) => res.json()).then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Deploy full-stack web application on netlify using template repository. Checkout console for response from backend api endpoint.
        </p>
        <a
          className="App-link"
          href="https://github.com/TeamShiksha/react-express-netlify-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
