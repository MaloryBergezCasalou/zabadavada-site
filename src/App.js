import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Material-ui
import { CssBaseline } from "@material-ui/core";
import Auth from './components/Auth.js';
import Users from './components/Users.js';
import SideBar from './components/SideBar';
import Chat from './components/Chat';

function App() {
  return <Router>
    <CssBaseline />
      <Switch>
          <Route path="/" exact component={() => <div className="app">
            <SideBar />
            <Chat />
          </div>
          } />
          <Route path="/auth" exact component={() => <Auth />} />
          <Route path="/user" exact component={() => <Users />} />
      </Switch>
    </Router>
}

export default App;
