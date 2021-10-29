import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Checker from "./components/Checker";
function App() {
  return (
    <Router>
    <Header/>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      
        <Route path="/">
        <Checker/>
        </Route>
      </Switch>
  </Router>
    
  );
}

export default App;
