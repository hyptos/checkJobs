/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchBox.css';
import SearchForm from '../SearchForm';
import SearchResults from '../SearchResults';

@withStyles(styles)
class SearchBox extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    query: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      query : '',
      filteredData: ''
    };
  };

  doSearch(queryText){
      console.log("box: "+queryText);
      //get query result
      var queryResult=[];
      this.props.data.forEach(function(person){
          if(person.name.toLowerCase().indexOf(queryText)!=-1)
          queryResult.push(person);
      });

      this.state.query = queryText;
      this.state.filteredData = this.props.data;

  };

  render(){
    var filteredData = this.props.data;
        return (
            <div className="SearchBox">
                <h2>Void Canvas Instant Search</h2>
                 <SearchForm query={this.state.query} doSearch={this.doSearch}/>
                <SearchResults data={this.props.data}/>
            </div>
        );
  }

}

export default SearchBox;
