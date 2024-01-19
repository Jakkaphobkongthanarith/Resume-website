import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const Main = () => {
  return (
    <div>
      <h2>Main Content</h2>
      {/* Add your main content here */}
      <Link to="/Contact">Go to Contact</Link>
    </div>
  );
};

export default Main;