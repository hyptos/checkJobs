/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../../decorators/withStyles';
import styles from './Tr.css';
import Td from './../Td';


@withStyles(styles)
class Tr extends Component {

	static propTypes = {
	    data: PropTypes.array.isRequired,
	    className: PropTypes.string,
	};


  	render() {
  		var td = this.props.data.map(function(data,i){
  			return ( <Td  key={i} data={data}/> );
  		}, this);

  		return (<tr>{td}</tr>);
  	}
}

export default Tr;
