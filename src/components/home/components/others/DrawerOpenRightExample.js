import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

class DrawerOpenRightExample extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <div>
        <p />
        <RaisedButton label="Toggle a Secondary Drawer" onTouchTap={this.handleToggle} />
        <Drawer width={200} openSecondary open={this.state.open}>
          <AppBar title="AppBar" />
        </Drawer>
      </div>
    );
  }
}
export default DrawerOpenRightExample;
