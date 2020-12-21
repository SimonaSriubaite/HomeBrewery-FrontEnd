import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

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

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.object,
};

export default PrivateRoute;
