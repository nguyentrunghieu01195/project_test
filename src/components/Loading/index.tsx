/**
 * @description 
 * @since Monday, 3 1st 2021, 15:52:18 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Loading.css';

export interface PropsLoading {
	type?: 'logo' | 'dot_spin' | 'line_spin',
	title?: string,
	loading?: boolean
}

class Loading extends Component<PropsLoading>{
	render(){
		const {type, title, loading} = this.props;
		let img = '';
		switch(type){
			case 'logo':
				img = require('./image/loading1.gif');
				break;
			case 'dot_spin':
				img = require('./image/loading2.gif');
				break;
			case 'line_spin':
				img = require('./image/loading3.gif');
				break;
			default:
				img = require('./image/loading1.gif');
				break;
		}

		return(
			<div className={loading ? '-loading -active' : '-loading d-none'}>
				<div>
					{(!type || type === 'logo') ? <img src={img} alt="loading"/> : <img src={img} width="200" alt="loading"/>}
					<p className="align-middle mb-2">{title}</p>
				</div>
			</div>
		);
	}
}

export default Loading;
