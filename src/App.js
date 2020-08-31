import React from "react";

import MainPage from "./components/Body/MainPage/MainPage.component";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Body/Login/Login.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
