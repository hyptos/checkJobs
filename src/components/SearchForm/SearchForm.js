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

  constructor() {
    super();
    this.state = {
      query : ''
    };
  };

  doSearch(event){
        var query = event.target.value;
        this.state.query = query;
        this.props.doSearch(query);
  };

  render(){
      return (
        <input type="text" ref="searchInput" placeholder="Search Name" value={this.state.query} onChange={this.doSearch}/>
      )
  }
}

export default SearchForm;
