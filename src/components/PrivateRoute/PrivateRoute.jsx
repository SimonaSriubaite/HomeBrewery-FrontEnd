import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function PrivateRoute({ path, component }) {
  const auth = useContext(AuthContext);
  return (
    <>
      {auth.token ? (
        <Route exact path={path} component={component} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
    </>
  );
}
export default PrivateRoute;
