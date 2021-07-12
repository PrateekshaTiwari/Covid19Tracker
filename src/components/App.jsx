import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import store from "../redux/store";
import Header from "./Header";
import Heading from "./Heading";
import HelpLine from "./HelpLine";
import CovidData from "./CovidData";
import DistrictData from "./DistrictData";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Heading />
              <CovidData />
            </Route>
            <Route exact path="/helpline">
              <HelpLine />
            </Route>
            <Route path="/:state">
              <DistrictData />
            </Route>
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
