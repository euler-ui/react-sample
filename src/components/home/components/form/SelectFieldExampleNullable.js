import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

class SelectFieldExampleNullable extends React.Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div>
        <h1>Select Nullable Value</h1>
        <SelectField
          floatingLabelText="Ready?"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={false} primaryText="No" />
          <MenuItem value primaryText="Yes" />
        </SelectField>
      </div>
    );
  }
}
export default SelectFieldExampleNullable;
