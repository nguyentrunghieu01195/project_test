/**
 * @description 
 * @since Thursday, 3 4th 2021, 14:05:58 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import Button from '../Button';
import './Switch.css';

export interface PropsSwitch {
	active?: boolean,
	onClick?: (e: any) => void
}

class Switch extends Component<PropsSwitch> {
	render(){
		const {active, onClick, ...props} = this.props;
		return(
			<Button
				className={`btn-sm btn-secondary btn-toggle${active ? ' active' : ''}`}
				data-toggle="button"
				aria-pressed={active ? true : false}
				autoComplete="off"
				onClick={() => onClick ? onClick(!active) : ''}
				{...props}>
				<div className="handle"></div>
			</Button>
		);
	}
}

export default Switch;
