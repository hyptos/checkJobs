/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Table.css';

@withStyles(styles)
class Table extends Component {

  render() {
    return (
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
    );
  }
}

export default Table;
