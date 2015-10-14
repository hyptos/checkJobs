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
    var fruitColors = [{
      lime: 'Green',
      lemon: 'Yellow',
      orange:'Orange'
    }];
    return !this.props.error ? (
      <div>
        <Table columns={['apple', 'peach', 'cherry']} data={['toto', 'tutu', 'titi']} />
      </div>
    ) : this.props.children;
  }

}

export default App;
