import React from 'react';
import PropTypes from 'prop-types';


class Console extends React.Component {
  static propTypes = {
    instanceId: PropTypes.string.isRequired,
    logs: PropTypes.arrayOf(PropTypes.any).isRequired,
    queryBuildLogs: PropTypes.func.isRequired,
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.instanceId === nextProps.instanceId && this.props.logs === nextProps.logs) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    console.log('Console did update', this.props.instanceId, this.props.logs.toArray());
    if (this.props.instanceId) {
      this.timer = setTimeout(this.props.queryBuildLogs.bind(this, this.props.instanceId), 3000);
    }
  }

  render() {
    const logs = this.props.logs.toArray().reverse().map((log) => {
      log = {
        __html: log.replace(/\n/g, '<br>'),
      };
      return <div key={log} dangerouslySetInnerHTML={log} />;
    });
    return (
      <div className="realworld-build-console">
        { logs }
      </div>);
  }
}

export default Console;
