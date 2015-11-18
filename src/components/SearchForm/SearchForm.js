/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchForm.css';

@withStyles(styles)
class SearchForm extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    query: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      query : ''
    };
  };

  doSearch = (event) => {
    this.setState({ query: event.target.value });
    this.props.doSearch(event.target.value);
  };

  render(){
      return (
        <input type="text" ref="searchInput" placeholder="Search Name" value={this.state.query} onChange={this.doSearch}/>
      )
  }
}

export default SearchForm;
