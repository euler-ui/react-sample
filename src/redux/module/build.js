import Immutable from 'immutable';

const OPEN = 'react-material-ui-boilerplate/build/OPEN';
const START_BUILD = 'react-material-ui-boilerplate/build/START_BUILD';
const START_BUILD_RESULT = 'react-material-ui-boilerplate/build/START_BUILD_RESULT';
const BUILD_ERROR = 'react-material-ui-boilerplate/build/BUILD_ERROR';
const QUERY_BUILD_LOGS_RESULT = 'react-material-ui-boilerplate/build/QUERY_BUILD_LOGS_RESULT';
const QUERY_BUILD_PROCESS_RESULT = 'react-material-ui-boilerplate/build/QUERY_BUILD_PROCESS_RESULT';

export const openBuildPage = build => {
  return {
    type: OPEN,
    build,
  };
};

export const startBuild = buildId => {
  return dispatch => {
    dispatch({
      type: START_BUILD,
      buildId,
    });
    fetch(`/api/builds/run/${buildId}`, {
      method: 'PUT',
    })
      .then(response => {
        return response.json();
      })
      .then(instanceId => {
        dispatch({
          type: START_BUILD_RESULT,
          instanceId,
        });
      })
      .catch(error => {
        console.log('Error', error);
        dispatch({
          type: BUILD_ERROR,
        });
      });
  };
};

export const queryBuildProgress = instanceId => {
  return dispatch => {
    fetch(`/api/builds/progress/${instanceId}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        dispatch({
          type: QUERY_BUILD_PROCESS_RESULT,
          result,
        });
      })
      .catch(error => {
        console.log('Error', error);
        dispatch({
          type: BUILD_ERROR,
        });
      });
  };
};

export const queryBuildLogs = instanceId => {
  return dispatch => {
    fetch(`/api/builds/logs/${instanceId}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        dispatch({
          type: QUERY_BUILD_LOGS_RESULT,
          result,
        });
      })
      .catch(error => {
        console.log('Error', error);
        dispatch({
          type: BUILD_ERROR,
        });
      });
  };
};

const initProgress = Immutable.Map({
  num: '',
});
const initState = Immutable.Map({
  instanceId: '',
  progress: initProgress,
  status: '',
  model: '',
  logs: Immutable.List(),
});

const build = (state = initState, action) => {
  switch (action.type) {
    case OPEN:
      return initState.set('model', action.build);

    case START_BUILD:
      return state.setIn(['progress', 'num'], 0).set('status', 'RUNNING');

    case START_BUILD_RESULT:
      return state.set('instanceId', action.instanceId);

    case BUILD_ERROR:
      return state.set('instanceId', '').set('progress', initProgress).update('logs', logs => {
        return logs.push('Build Error.');
      });

    case QUERY_BUILD_LOGS_RESULT:
      return state.update('logs', logs => {
        return logs.push(action.result);
      });

    case QUERY_BUILD_PROCESS_RESULT: {
      const result = action.result;
      const status = result.status;
      const num = parseInt(result.progress * 100, 10);
      if (status === 'RUNNING') {
        state = state.set(
          'progress',
          Immutable.Map({
            num,
          }),
        );
      } else if (status === 'SUCCESS') {
        state = state.set('instanceId', '').set('progress', initProgress).update('logs', logs => {
          return logs.push(`Build Success. Build takes ${result.time / 1000}s`);
        });
      } else {
        state = state.set('instanceId', '').set('progress', initProgress).update('logs', logs => {
          return logs.push(
            `Build Failed. Current progress ${num}%. When progress > 50%, there's 1/3 chance to get failure (progress %3 === 1)`,
          );
        });
      }
      return state;
    }
    default:
      return state;
  }
};
export default build;
