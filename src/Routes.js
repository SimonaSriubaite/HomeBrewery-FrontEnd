import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Header, PrivateRoute, Loader } from "./components";
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AddBottleLazy = lazy(() => import("./pages/AddBottle/AddBottle"));
const AddBeerLazy = lazy(() => import("./pages/AddBeer/AddBeer"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));

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
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route path="/login" component={LoginLazy} />
          <Route path="/register" component={RegisterLazy} />
          <PrivateRoute path="/about" component={AboutLazy} />
          <PrivateRoute path="/add-beer" component={AddBeerLazy} />
          <PrivateRoute path="/add-bottle" component={AddBottleLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
