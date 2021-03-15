/**
 * @description 
 * @since Friday, 3 5th 2021, 9:13:42 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';

interface PropsTabPane {
	className?: string,
	[propsName: string]: any
};

class TabPane extends Component<PropsTabPane> {
	render(){
		const {className, ...props} = this.props;
		return(
			<div className={`tab-pane fade${className ? ` ${className}` : ''}`} {...props} role="tabpanel">
				{this.props.children}
			</div>
		);
	}
}

export default TabPane;