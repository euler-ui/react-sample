import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import DialogExampleSimple from './DialogExampleSimple';
import DrawerSimpleExample from './DrawerSimpleExample';
import DrawerOpenRightExample from './DrawerOpenRightExample';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import SnackbarExampleSimple from './SnackbarExampleSimple';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const CircularProgressExampleSimple = () =>
  (<div>
    <h1>Circular Progress</h1>
    <CircularProgress />
    <CircularProgress size={60} thickness={7} />
    <CircularProgress size={80} thickness={5} />
  </div>);

const LinearProgressExampleSimple = () =>
  (<div>
    <h1>Linear Progress</h1>
    <LinearProgress mode="indeterminate" />
  </div>);
const RefreshIndicatorExampleSimple = () =>
  (<div style={style.container}>
    <h1>Refresh Indicator</h1>
    <RefreshIndicator
      percentage={30}
      size={40}
      left={10}
      top={0}
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={60}
      size={50}
      left={65}
      top={0}
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={80}
      size={60}
      left={120}
      top={0}
      color="red"
      status="ready"
      style={style.refresh}
    />
    <RefreshIndicator
      percentage={100}
      size={70}
      left={175}
      top={0}
      color="red" // Overridden by percentage={100}
      status="ready"
      style={style.refresh}
    />
  </div>);
const RefreshIndicatorExampleLoading = () =>
  (<div style={style.container}>
    <RefreshIndicator size={40} left={10} top={0} status="loading" style={style.refresh} />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
  </div>);

function Others() {
  return (
    <div>
      <Tabs className="components-secondary-navbar">
        <Tab label="Dialog">
          <DialogExampleSimple />
          <SnackbarExampleSimple />
        </Tab>
        <Tab label="Stepper">
          <HorizontalLinearStepper />
        </Tab>
        <Tab label="Progress">
          <CircularProgressExampleSimple />
          <LinearProgressExampleSimple />
          <RefreshIndicatorExampleSimple />
          <RefreshIndicatorExampleLoading />
        </Tab>
        <Tab label="Drawer">
          <div style={{ textAlign: 'center' }}>
            <DrawerSimpleExample />
            <DrawerOpenRightExample />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Others;
