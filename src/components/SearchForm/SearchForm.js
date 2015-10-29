/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchForm.css';

@withStyles(styles)
class SearchForm extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };


  doSearch(){
        var query=this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    };

  render(){
      return (<input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>)
  }

}

export default SearchForm;
