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
            rows.push(<tr key={i}><td>{person.name}</td><td>{person.roll}</td></tr>)
          });
        }
        //returning the table
        return(
             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
  }

}

export default SearchResults;
