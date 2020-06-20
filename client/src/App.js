import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
