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
  };

    constructor() {
      super();
      console.log(this);
      this.state = {
          query:'',
          filteredData: this.props.data
      };
    };

    doSearch(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        this.props.data.forEach(function(person){
            if(person.name.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(person);
        });
 
        this.setState({
            query:queryText,
            filteredData: queryResult
        });
    };

  render(){
        return (
            <div className="SearchBox">
                <h2>Void Canvas Instant Search</h2>
                <SearchForm query={this.state.query} doSearch={this.doSearch}/>
                <SearchResults data={this.state.filteredData}/>
            </div>
        );
  }

}

export default SearchBox;