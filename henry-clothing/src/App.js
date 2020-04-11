import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/hats"
          component={() => {
            return <h1>HATS</h1>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
