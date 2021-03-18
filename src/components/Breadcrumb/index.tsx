/**
 * @description 
 * @since Monday, 3 1st 2021, 16:24:27 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Breadcrumb.css';

interface Row {
	text: string,
	link?: string,
	icon?: string
}

interface Data {
	[index:number]:Row,
	length?: any,
	map?: any
}

export interface PropsBreadcrumb {
	data: Data
}

class Breadcrumb extends Component<PropsBreadcrumb>{
	render(){
		const {data} = this.props;
		
		return (
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					{data.length > 0 &&
						data.map((row: any, idx: any) => <React.Fragment key={idx}>
							{idx < data.length - 1 &&
								<li className="breadcrumb-item">
									<a href={row.link}>
										{row.icon &&
											<i className={row.icon} />
										}
										{row.text}
									</a>
								</li>
							}
							{idx === data.length - 1 &&
								<li className="breadcrumb-item active">
									{row.icon &&
										<i className={row.icon} />
									}
									{row.text}
								</li>
							}
						</React.Fragment>
						)
					}
				</ol>
			</nav>
		);
	}
}

export default Breadcrumb;