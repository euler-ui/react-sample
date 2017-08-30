import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RealWorldContainer from 'containers/RealWorldContainer';
import PropTypes from 'prop-types';
import TopBar from './Topbar';
import './home.css';
import Welcome from './Welcome';
import Components from './components';

function Home(props) {
  return (
    <section className="primary">
      <TopBar history={props.history} />
      <section className="primary-content">
        <Switch>
          <Route path={`${props.match.url}/components`} component={Components} />
          <Route path={`${props.match.url}/realworld`} component={RealWorldContainer} />
          <Route exec component={Welcome} />
        </Switch>
      </section>
    </section>
  );
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Home;
