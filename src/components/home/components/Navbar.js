import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';

class Navbar extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };
  state = {
    selectedTab: this.props.items[0].url,
  };

  componentDidMount() {
    this.setSelectedTab();
  }

  onTabChange = tabVal => {
    this.props.history.push(tabVal);
    this.setState({
      selectedTab: tabVal,
    });
  };

  setSelectedTab = () => {
    const pathname = this.getPathFromRouter();
    if (this.hasItemByPath(pathname)) {
      this.setState({
        selectedTab: pathname,
      });
    }
  };

  getItemIdByPath = path => {
    const items = this.props.items;
    const item =
      items &&
      items.filter(it => {
        return path === it.urlFullPath;
      });
    return item[0] && item[0].id;
  };

  getPathFromRouter = () => {
    let pathname = this.props.history.location.pathname;
    if (/(.*)\/$/.test(pathname)) {
      pathname = RegExp.$1;
    }
    return pathname;
  };

  hasItemByPath = pathname => {
    const items = this.props.items;
    const item =
      items &&
      items.some(it => {
        return pathname === it.url;
      });
    return !!item;
  };

  render() {
    const navItems = this.props.items.map(item => {
      return <Tab key={item.name} label={item.name} value={item.url} data-route={item.url} />;
    });
    return (
      <Tabs value={this.state.selectedTab} onChange={this.onTabChange}>
        {navItems}
      </Tabs>
    );
  }
}

export default Navbar;
