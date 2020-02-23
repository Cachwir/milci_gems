import React, {Component} from "react";

import "./App.css";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import AppRouter from "./AppRouter";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

  /**
   * L'appli sera composée de trois pages :
   * - une page de garde
   * - une gallerie
   * - à propos (pour expliquer comment ce site a été fait, dans quel contexte et ajouter des remerciements et des
   * sources)
   */

  routerEvents = [];

  registerRouterEvent(event)
  {
      this.routerEvents.push(event);
  }

  render() {
      return (
          <Router>
              <div id="wrapper">
                  <Header />
                  <Menu Parent={this} />
                  <AppRouter onRouteChangeEvents={this.routerEvents}  />
                  <Footer />
              </div>
          </Router>
      );
  }
}

export default App;
