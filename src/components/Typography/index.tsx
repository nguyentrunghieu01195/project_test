/**
 * @description   
 * @since         Monday, 3 8th 2021, 14:48:42 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Typography.css';

export interface PropsTypography {
	text?: string,
	size: 10 | 12 | 14 | 16 | 18 | 20 | 22 | 30 | 40 | 60,
	color?: 'none' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted' | 'white'
}

class Typography extends Component<PropsTypography> {
	render() {
		const { text, size, color } = this.props;
		return (
			<p className={`font${size} ${color !== 'none' ? `text-${color}` : ''}`}>{text}</p>
		)
	}
}

export default Typography;
