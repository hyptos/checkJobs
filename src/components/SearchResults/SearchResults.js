/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchResults.css';

@withStyles(styles)
class SearchResults extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render(){
        //making the rows to display
        var rows=[];
        if(this.props.data.length > 0){
          this.props.data.forEach(function(person, i) {
            rows.push(<tr key={i}>
              <td>{person.company}</td>
              <td>{person.email}</td>
              <td>{person.jobArea}</td>
              <td>{person.jobAmount}</td>
              <td>{person.jobTitle}</td>
            </tr>)
          });
        }
        //returning the table
        return(
               <table className="pure-table">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Elauk</th>
                          <th>jobarea</th>
                          <th>jobAmount</th>
                          <th>jobtitle</th>
                      </tr>
                  </thead>
                  <tbody>{rows}</tbody>
              </table>
        )
  }

}

export default SearchResults;
