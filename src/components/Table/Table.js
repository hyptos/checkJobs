/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Table.css';
import Tr from './Tr';

@withStyles(styles)
class Table extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
  };

  render() {
    return (
      <table>
          <thead>
          </thead>
          <tbody>
                <Tr data={this.props.data} />
          </tbody>
      </table>
    );
  }
}

export default Table;
