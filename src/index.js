import React from 'react';
import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/context/AuthProvider';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
      
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default ReactDOM;
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

