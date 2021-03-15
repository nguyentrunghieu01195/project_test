/**
 * @description 
 * @since Friday, 3 5th 2021, 8:17:10 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';

export interface PropsButtonGroup {
	className?: string,
	[propName: string]: any;
}

class ButtonGroup extends Component<PropsButtonGroup> {
	render(){
		const {className, ...props} = this.props;
		return(
			<div className={`btn-group${className ? ` ${className}` : ''}`} {...props}>
				{this.props.children}
			</div>
		);
	}
}

export default ButtonGroup;