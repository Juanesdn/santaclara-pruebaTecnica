import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = localStorage.getItem("key") ? true : false;

  /**
   * Redirecciona al usuario a la página de inicio de sesión en caso de que
   * este no esté logeado
   */

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }
  /**
   * Redirecciona al usuario al dashboard en caso de que esté logeado e intente
   * acceder al inicio de sesión
   */

  if (!isPrivate && signed) {
    return <Redirect to="/home" />;
  }

  /**
   * en caso de que no sea ninguno de los casos anteriores,
   * se direcciona al usuario a la ruta declarada
   */

  return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
