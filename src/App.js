import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";
import User from "./containers/User";
function App() {
  return (
    <Router>
    <Header/>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        
        <Route path="/profile/:username">
          <User/>
        </Route>
        <Route path="/users">
        </Route>
        <Route path="/">
        <Home/>
        </Route>
      </Switch>
  </Router>
    
  );
}

export default App;
