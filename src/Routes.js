import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Header } from "./components";
import { Home, Login, Register, About, AddBeer, AddBottle } from "./pages";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function Routes() {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Header
        loggedIn={!!auth.token}
        logout={() => {
          auth.setToken();
          auth.clearLocalStorage();
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/add-beer" component={AddBeer} />
        <PrivateRoute path="/add-bottle" component={AddBottle} />
      </Switch>
    </Router>
  );
}

export default Routes;
