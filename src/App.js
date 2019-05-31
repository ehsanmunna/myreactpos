import React from 'react';
import './App.css';
import AppNavBar from './Component/AppBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './Screens/Auth/Login';
import Home from './Screens/Home';
import Dashboard from './Screens/Dashboard/DashboardHome';
import ProtectedRoute from "./Service/protected.route";
import UserCreate from './Screens/Auth/UserCreate';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/usercreate" component={UserCreate} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="*" component={() => "404 NOT FOUND" } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
