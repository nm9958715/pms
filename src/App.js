import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/loginForm" render={(props) => <LoginForm {...props} onLogin={handleLogin} />} />
          <Route path="/signupForm" component={SignupForm} />
          <Route path="/dashboard">
            {isLoggedIn ? <Dashboard /> : <Redirect to="/loginForm" />}
          </Route>
          <Redirect to="/loginForm" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;