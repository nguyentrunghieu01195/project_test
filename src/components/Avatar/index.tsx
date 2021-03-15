/**
 * @description 
 * @since Friday, 3 5th 2021, 15:03:19 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
// import IMG_NO_AVATAR from './image/noavatar.png';
import './Avatar.css';

export interface PropsAvatar {
	src?: string,
	size: number,
	[propsName: string]: any
}

class Avatar extends Component<PropsAvatar> {
	render(){
		const {src, size} = this.props;
		return(
			<img src={src ? src : require('./image/noavatar.png')} alt="Avatar" width={size} height={size} className="avatar" />
		);
	}
}

export default Avatar;
