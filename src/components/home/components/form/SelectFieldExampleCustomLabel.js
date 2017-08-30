import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class SelectFieldExampleCustomLabel extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div>
        <h1>Select Custom Label</h1>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
          <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
          <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
          <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
        </SelectField>
      </div>
    );
  }
}
export default SelectFieldExampleCustomLabel;
