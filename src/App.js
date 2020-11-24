import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Package } from "./views";
import { TopBar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/test" component={() => <Package />} />
        </Switch>
      </Router>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
