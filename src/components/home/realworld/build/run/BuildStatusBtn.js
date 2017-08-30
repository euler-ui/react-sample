import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class BuildStatusBtn extends React.Component {
  static propTypes = {
    instanceId: PropTypes.string.isRequired,
    progress: PropTypes.objectOf(PropTypes.any).isRequired,
    queryBuildProgress: PropTypes.func.isRequired,
  };
  shouldComponentUpdate(nextProps) {
    if (
      this.props.instanceId === nextProps.instanceId &&
      this.props.progress === nextProps.progress
    ) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    console.log('BuildStatusBtn did update', this.props.instanceId, this.props.progress.toObject());
    const instanceId = this.props.instanceId;
    if (instanceId) {
      this.timer = setTimeout(this.props.queryBuildProgress.bind(this, instanceId), 3000);
    }
  }
  renderProgress = () => {
    const progressNum = this.props.progress.get('num');
    if (progressNum === '') {
      return null;
    }
    return (
      <div className="progress-btn__progress" style={{ width: `${progressNum}%` }}>
        <div className="progress-btn__progress--running" />
      </div>
    );
  };

  render() {
    const props = this.props;
    const progressNum = props.progress.get('num');
    const displayText = progressNum !== '' ? `Build Progress: ${progressNum}%` : 'Build';
    return (
      <div className="progress-btn">
        <RaisedButton
          label={displayText}
          fullWidth
          primary
          disabled={progressNum !== ''}
          onClick={props.doBuild}
        />
        {this.renderProgress()}
      </div>
    );
  }
}

export default BuildStatusBtn;
