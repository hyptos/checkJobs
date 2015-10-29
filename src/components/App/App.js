/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import SearchForm from '../SearchForm';
import SearchResults from '../SearchResults';
import Footer from '../Footer';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    var tableData=[
{
    name:'Paul Shan',
    roll: '001'
},
{
    name:'John Doe',
    roll: '002'
},
{
    name:'Sachin Tendulkar',
    roll: '003'
}];
    return !this.props.error ? (
      <div>
        <SearchForm />
        <SearchResults data={tableData} />
      </div>
    ) : this.props.children;
  }

}

export default App;
