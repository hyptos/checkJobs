/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../../decorators/withStyles';
import styles from './Td.css';
import Attr from './Attr';

@withStyles(styles)
class Td extends Component {

	static propTypes = {
	    data: PropTypes.object.isRequired,
  	};

  render() {
    return (
      <Attr data={this.props.data.key} />,
      <Attr data={this.props.data.name} />,
      <Attr data={this.props.data.stock} />,
      <Attr data={this.props.data.price} />
    );
  }
}

export default Td;
