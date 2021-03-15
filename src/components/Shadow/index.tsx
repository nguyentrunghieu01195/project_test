/**
 * @description   
 * @since         Monday, 3 8th 2021, 16:35:56 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Shadow.css';

export interface PropsShadow {
	type?: 'shadow1' | 'shadow2' | 'shadow3' | 'shadow4' | 'shadow5' | 'shadow6'
}

class Shadow extends Component<PropsShadow> {
	render() {
		const { type } = this.props;
		return (
			<div className={`box-shadow ${type}`} />
		)
	}
}

export default Shadow;
