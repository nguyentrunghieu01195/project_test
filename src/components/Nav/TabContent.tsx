/**
 * @description 
 * @since Friday, 3 5th 2021, 9:05:20 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';

interface PropsTabContent {
	className?: string,
	[propsName: string]: any
};

class TabContent extends Component<PropsTabContent> {
	render(){
		const {className, ...props} = this.props;
		return(
			<div className={`tab-content${className ? ` ${className}` : ''}`} {...props}>
				{this.props.children}
			</div>
		);
	}
}

export default TabContent;