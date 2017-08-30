import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

const style = {
  margin: 12,
};

class BuildList extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.any).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    builds: PropTypes.arrayOf(PropTypes.any).isRequired,
  };
  state = {
    selectedRows: [],
    openSnackMsg: false,
  };

  componentDidMount() {
    console.log('BuildList is mouted');
    this.props.actions.getBuildList();
  }

  onNew = () => {
    this.props.history.push('/home/realworld/build/add');
  };

  onRun = () => {
    const selectedRows = this.state.selectedRows;
    if (!selectedRows || !selectedRows.length) {
      this.setState({
        openSnackMsg: true,
      });
      return;
    }
    const build = this.props.builds[selectedRows[0]];
    this.props.actions.openBuildPage(build);
    this.props.history.push(`/home/realworld/build/${build.id}/run`);
  };

  onDelete = () => {
    if (!this.state.selectedRows || !this.state.selectedRows.length) {
      this.setState({
        openSnackMsg: true,
      });
    }
  };

  onPerformanceTest = () => {
    console.time('onPerformanceTest');
    const test = [];
    for (let i = 0; i < 1000000; i += 1) {
      test.push(i);
      window[`badcode${i}`] = 1;
    }
    console.timeEnd('onPerformanceTest');
  };

  onRowSelection = rows => {
    this.setState({
      openSnackMsg: false,
      selectedRows: rows,
    });
  };

  render() {
    const builds = this.props.builds || [];
    return (
      <div>
        <h1>Build List</h1>
        <div>
          <RaisedButton label="New" style={style} onClick={this.onNew} />
          <RaisedButton label="Run" primary style={style} onClick={this.onRun} />
          <RaisedButton label="Delete" secondary style={style} onClick={this.onDelete} />
          <RaisedButton label="Performance Test" style={style} onClick={this.onPerformanceTest} />
        </div>
        <Divider />
        <Table onRowSelection={this.onRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Repository">Repository</TableHeaderColumn>
              <TableHeaderColumn tooltip="Last Status">Last Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {builds.map((row, index) =>
              (<TableRow key={row.id} selected={this.state.selectedRows.indexOf(index) !== -1}>
                <TableRowColumn>
                  {row.id}
                </TableRowColumn>
                <TableRowColumn>
                  {row.name}
                </TableRowColumn>
                <TableRowColumn>
                  <a href={row.repository} target="_blank">
                    {row.repository}
                  </a>
                </TableRowColumn>
                <TableRowColumn>
                  {row.lastBuildStatus}
                </TableRowColumn>
              </TableRow>),
            )}
          </TableBody>
        </Table>
        <Divider />
        <SnackbarMessage open={this.state.openSnackMsg} />
      </div>
    );
  }
}

const SnackbarMessage = props => {
  return (
    <Snackbar open={props.open} message={'Please select an employee!'} autoHideDuration={2000} />
  );
};
SnackbarMessage.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default BuildList;
