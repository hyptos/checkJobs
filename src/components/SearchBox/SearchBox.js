/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchBox.css';
import SearchForm from '../SearchForm';
import SearchResults from '../SearchResults';

@withStyles(styles)
class SearchBox extends Component {


  constructor(props) {
    super(props);
    this.state = {
      query : '',
      filteredData: this.props.data
    };
  };

  doSearch = (queryText) => {
    console.log("box: "+queryText);
      //get query result
      var queryResult=[];
      if(this.props.data.length > 0){
        this.props.data.forEach(function(person){
          var name = person.name.toLowerCase();
          var email = person.email.toLowerCase();
          queryText = queryText.toLowerCase();
            if(name.indexOf(queryText)!=-1){
              queryResult.push(person);
            }
            // if(email.indexOf(queryText)!=-1){
            //   if(queryResult.indexOf(queryText)==-1){
            //     queryResult.push(person);
            //   }
            // }

        });
     }
     console.log(queryResult);
      this.setState({ query: queryText, filteredData: queryResult });
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
