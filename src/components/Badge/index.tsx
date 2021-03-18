/**
 * @description 
 * @since Friday, 3 5th 2021, 14:08:13 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Badge.css';

export interface PropsBadge {
	type?: 'top' | 'in',
	border?: boolean,
	value: number,
	[propsName: string]: any
}

class Badge extends Component<PropsBadge> {
	render(){
		const {type, value, border, ...props} = this.props;
		let style = {};
		if(border){
				style = {
				border: '2px solid #FFF'
			};
		}
		return(
			<span className={`badge bg-orange${type === 'top' ? ' noti-relation' : ''}`} style={style} {...props}>{value}</span>
		);
	}
}

export default Badge;