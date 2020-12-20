import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Header, PrivateRoute, Loader, Footer } from "./components";
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AddBottleLazy = lazy(() => import("./pages/AddBottle/AddBottle"));
const AddBeerLazy = lazy(() => import("./pages/AddBeer/AddBeer"));
const ViewBeersLazy = lazy(() => import("./pages/ViewBeers/ViewBeers"));
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
          <PrivateRoute path="/view-beers" component={ViewBeersLazy} />
          <PrivateRoute path="/add-beer" component={AddBeerLazy} />
          <PrivateRoute path="/add-bottle" component={AddBottleLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
