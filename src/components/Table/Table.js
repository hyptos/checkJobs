/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Table.css';
import Tr from './Tr';
import Td from './Td';

@withStyles(styles)
class Table extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
  };

  columns(){
      this.props.columns.map(function(column){
        <th key={column}>{column}</th>
      });
  };

  row(){
    var key = '';
    this.props.data.map(function(key, i){
        <td>{key}</td>
    });
  };

  content(){
    var self = this;
    this.props.data.map(function(rowData, i){
        var row = [];
        var column = '';
        var colIndex = '';
        for (var i = 0; i < self.props.columns.length; i++) {
            row.push(self.props.columns[i], i)
        }
        return <tr key={i}>{self.row()}</tr>
    });
  };

  render() {
    return (
      <table>
          <thead>
              <tr>
                {this.columns()}
              </tr>
          </thead>
          <tbody>{this.content()}</tbody>
      </table>
    );
  }
}

export default Table;
