import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Buttons from './ButtonSamples';
import Form from './form';
import Others from './others';
import Tables from './TablelistSamples';

const items = [
  {
    name: 'Buttons',
    url: '/home/components/buttons',
  },
  {
    name: 'Form',
    url: '/home/components/form',
  },
  {
    name: 'List & Table',
    url: '/home/components/tablelist',
  },
  {
    name: 'Others',
    url: '/home/components/others',
  },
];

function SecondaryPage(props) {
  return (
    <section>
      <Navbar items={items} history={props.history} />
      <section className="components-content">
        <Switch>
          <Route path={`${props.match.url}/buttons`} component={Buttons} />
          <Route path={`${props.match.url}/form`} component={Form} />
          <Route path={`${props.match.url}/others`} component={Others} />
          <Route path={`${props.match.url}/tablelist`} component={Tables} />
          <Route exact component={Buttons} />
        </Switch>
      </section>
    </section>
  );
}
SecondaryPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SecondaryPage;
