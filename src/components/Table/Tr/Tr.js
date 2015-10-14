/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../../decorators/withStyles';
import styles from './Tr.css';

@withStyles(styles)
class Tr extends Component {

  render() {
    return (
      <tr>
      </tr>
    );
  }
}

export default Tr;
