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
      for (var i = 0; i < 100; i++) {
        tableData.push({
          company: Faker.company.companyName(),
          email: Faker.internet.email(),
          jobDate: Faker.date.past(),
          jobTitle: Faker.name.jobTitle(),
          jobAmount: Math.round(Faker.finance.amount() * 1000) / 100,
          jobArea: Faker.name.jobArea()
        });
      }
    return !this.props.error ? (
      <div className="content">
        <SearchBox data={tableData} />
        </div>
    ) : this.props.children;
  }

}

export default App;
