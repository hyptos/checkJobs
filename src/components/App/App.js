/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import SearchBox from '../SearchBox';
import Footer from '../Footer';
import Faker from 'faker';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    var tableData = [];
    console.log(Faker.Name);
      for (var i = 0; i < 10000; i++) {
        tableData.push({
          name: Faker.name.firstName() + ' ' + Faker.name.lastName() ,
          email: Faker.internet.email(),
          roll: Faker.random.number()
        });
      }
    return !this.props.error ? (
        <SearchBox data={tableData} />
    ) : this.props.children;
  }

}

export default App;
