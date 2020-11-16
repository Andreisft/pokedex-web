import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PokemonDetail from "../pages/PokemonDetail";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomePage} />
      <Route path="/pokemon-detail/:pokemonId" component={PokemonDetail} />
    </Switch>
  );
}

export default Routes;
