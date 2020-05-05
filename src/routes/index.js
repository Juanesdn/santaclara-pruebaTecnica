import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import { SignIn, Dashboard, Profile, Rules } from "../views";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" component={Profile} exact isPrivate />
      <Route path="/home" component={Dashboard} exact isPrivate />
      <Route path="/rules" component={Rules} exact isPrivate />
      {/* Si el usuario no está autenticado se redirecciona a la página de login */}
      <Route component={SignIn} />
    </Switch>
  );
};

export default Routes;
