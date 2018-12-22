import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// VIEWS
import Homepage from './views/homepage';
import Studio from './views/studio';
import Workshops from './views/workshops';
import Mentorship from './views/mentorship';
import Application from './views/application';
import Editorial from './views/editorial';
import About from './views/about';
import Contact from './views/contact';
import Submitted from './views/submitted';
import NoMatch from './views/404';

// COMPONENTS
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// WORKSHOP ROUTES

import { workshops } from './_workshops/data';

const WorkshopRoutes = Object.keys(workshops).map(key => {
  return (
    <Route
      key={key}
      path={workshops[key].path}
      component={workshops[key].component}
      vimeo={workshops[key].vimeo}
      exact
    />
  );
});

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/studio" component={Studio} />
              <Route path="/workshops" component={Workshops} />
              <Route path="/mentorship" component={Mentorship} />
              <Route path="/application" component={Application} />
              <Route path="/submitted" component={Submitted} />
              <Route path="/editorial" component={Editorial} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />

              {WorkshopRoutes}

              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
