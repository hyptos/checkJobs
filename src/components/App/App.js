/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Table from '../Table';
import Footer from '../Footer';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
  var datas = [
    {key: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {key: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {key: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {key: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {key: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {key: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
    return !this.props.error ? (
      <div>
        <Table data={datas} />
      </div>
    ) : this.props.children;
  }

}

export default App;
