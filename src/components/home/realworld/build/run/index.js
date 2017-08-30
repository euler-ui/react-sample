import React from 'react';
import PropTypes from 'prop-types';
import BuildInfo from './BuildInfo';
import BuildStatusBtn from './BuildStatusBtn';
import Console from './Console';

class BuildRunner extends React.Component {
  static propTypes = {
    build: PropTypes.objectOf(PropTypes.any).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    actions: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  componentDidMount() {
    const model = this.props.build && this.props.build.get('model');
    if (!model) {
      this.props.history.push('/home/realworld');
    }
  }

  doBuild = () => {
    const build = this.props.build;
    const buildId = build.get('model').id;
    this.props.actions.startBuild(buildId);
  };

  render() {
    const build = this.props.build;
    const actions = this.props.actions;
    return (
      <div className="realworld-build">
        <div className="realworld-build-main">
          <BuildInfo model={build.get('model')} />
          <BuildStatusBtn
            progress={build.get('progress')}
            instanceId={build.get('instanceId')}
            doBuild={this.doBuild}
            queryBuildProgress={actions.queryBuildProgress}
          />
        </div>
        <Console
          logs={build.get('logs')}
          instanceId={build.get('instanceId')}
          queryBuildLogs={actions.queryBuildLogs}
        />
      </div>
    );
  }
}

export default BuildRunner;
