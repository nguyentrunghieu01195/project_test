/**
 * @description 
 * @since Monday, 3 1st 2021, 16:58:05 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, {Component} from 'react';

export interface PropsRow {
	className?: string,
	align?: 'start' | 'center' | 'end',
	justify?: 'start' | 'center' | 'end' | 'around' | 'between',
	inner?: string,
	onClick?: (e: any) => void,
	style?: object
}

class Row extends Component<PropsRow> {
	render(){
		const {className, align, justify, inner, onClick, style} = this.props;
		return(
			<>
				{inner ?
					<div
						className={`row${className ? ` ${className}` : ''}${align ? ` align-items-${align}` : ''}${justify ? ` justify-content-${justify}` : ''}`}
						onClick={(e) => onClick ? onClick(e) : ''}
						style={style}
						dangerouslySetInnerHTML={{__html: inner}}
					/>
					:
					<div
						className={`row${className ? ` ${className}` : ''}${align ? ` align-items-${align}` : ''}${justify ? ` justify-content-${justify}` : ''}`}
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

export default Row;
