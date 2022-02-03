import React from "react";
import ViewOne from "./components/ViewOne";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pet from "./components/Pet";
import PetImage from "./components/PetImage";

const App = () => {
  return (
    <Router>
      <ViewOne />
      <Switch>
        <Route path="/pet/image/:namePet" exact>
          <PetImage />
        </Route>
        <Route path="/pet/:letter">
          <Pet />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
