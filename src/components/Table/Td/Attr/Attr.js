/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../../../decorators/withStyles';
import styles from './Attr.css';


@withStyles(styles)
class Attr extends Component {

	static propTypes = {
	    data: PropTypes.string.isRequired
	};

  	render() {
  		return (
        <td>{this.props.data}</td>
      );
  	}
}

export default Attr;
