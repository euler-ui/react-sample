import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BuildList from './BuildList';
import AddBuildPanel from './build/add';
import RunBuildPanel from './build/run';

import './realworld.css';

function RealWorld({ match, actions, builds, build, history }) {
  return (
    <section>
      <Switch>
        <Route
          exact
          path={match.url}
          render={() => {
            return <BuildList actions={actions} builds={builds} history={history} />;
          }}
        />
        <Route
          path={`${match.url}/build/add`}
          render={() => {
            return <AddBuildPanel actions={actions} build={build} history={history} />;
          }}
        />
        <Route
          path={`${match.url}/build/:buildId/run`}
          render={() => {
            return <RunBuildPanel actions={actions} build={build} history={history} />;
          }}
        />
      </Switch>
    </section>
  );
}
RealWorld.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
  build: PropTypes.objectOf(PropTypes.any).isRequired,
  builds: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RealWorld;
