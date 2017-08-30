import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';

function BuildInfo(props) {
  const model = props.model;
  return (
    <List>
      <h1>Build Info</h1>
      <ListItem primaryText="Build ID" secondaryText={model.id} />
      <ListItem primaryText="Build Name" secondaryText={model.name} />
      <ListItem primaryText="Repository URL" secondaryText={model.repository} />
    </List>
  );
}

BuildInfo.propTypes = {
  model: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BuildInfo;
