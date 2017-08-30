import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import PropTypes from 'prop-types';

class Topbar extends React.Component {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  state = {
    showCase: 'Home',
  };

  handleChange = (event, index, value) => {
    this.setState({
      value,
    });
  };

  showComponents = () => {
    this.setState({
      showCase: 'Components',
    });
    this.props.history.push('/home/components');
  };

  showRealWorld = () => {
    this.setState({
      showCase: 'Real World',
    });
    this.props.history.push('/home/realworld');
  };

  showHome = () => {
    this.setState({
      showCase: 'Home',
    });
    this.props.history.push('/home');
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Show Case:" />
          <RaisedButton label="Components" onClick={this.showComponents} primary />
          <RaisedButton label="Real World" onClick={this.showRealWorld} primary />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={`Show Case: ${this.state.showCase}`} />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Home" onClick={this.showHome} primary />
          <RaisedButton label="Logout" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default Topbar;
