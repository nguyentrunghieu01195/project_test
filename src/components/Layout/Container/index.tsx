/**
 * @description 
 * @since Monday, 3 1st 2021, 16:51:09 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import {Component} from 'react';

export interface PropsContainer {
	className?: string,
	fluid?: boolean,
	inner?: string,
	style?: object,
	onClick?: (e: any) => void,
};

class Container extends Component<PropsContainer> {
	render(){
		const {className, fluid, inner, onClick, style} = this.props;
		return(
			<>
				{inner ?
					<div
						className={`${fluid ? 'container-fluid' : 'container'} ${className ? className : ''}`}
						onClick={(e) => onClick ? onClick(e) : ''}
						style={style}
						dangerouslySetInnerHTML={{__html: inner}}
					/>
					:
					<div
						className={`${fluid ? 'container-fluid' : 'container'} ${className ? className : ''}`}
						onClick={(e) => onClick ? onClick(e) : ''}
						style={style}
					>
						{this.props.children}
					</div>
				}
			</>
		);
	}
}

export default Container;