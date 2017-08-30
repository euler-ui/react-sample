import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class AutoCompleteExampleSimple extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = value => {
    this.setState({
      dataSource: [value, value + value, value + value + value],
    });
  };

  render() {
    return (
      <div>
        <h1>Simple example</h1>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth
        />
      </div>
    );
  }
}
export default AutoCompleteExampleSimple;
