/**
 * @description 
 * @since Monday, 3 1st 2021, 17:03:57 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, {Component} from 'react';

export interface PropsCol {
	xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	offsetXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	offsetLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	offsetMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	offsetSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	offsetXs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
	align?: 'start' | 'center' | 'end',
	order?: number,
	className?: string,
	inner?: string,
	onClick?: (e: any) => void,
	style?: object
}

class Col extends Component<PropsCol> {
	render(){
		const {xl, lg, md, sm, xs, offsetXl, offsetLg, offsetMd, offsetSm, offsetXs, align, order, className, inner, onClick, style} = this.props;
		let classCol = `${xl ? `col-xl-${xl} ` : ''}${lg ? `col-lg-${lg} ` : ''}${md ? `col-md-${md} ` : ''}${sm ? `col-sm-${sm} ` : ''}${xs ? `col-xs-${xs} ` : ''}`;
		let classOffset = `${offsetXl ? `offset-xl-${offsetXl} ` : ''}${offsetLg ? `offset-lg-${offsetLg} ` : ''}${offsetMd ? `offset-md-${offsetMd} ` : ''}${offsetSm ? `offset-sm-${offsetSm} ` : ''}${offsetXs ? `offset-xs-${offsetXs} ` : ''}`;
		
		
		return (
			<>
				{inner ?
					<div
						className={`${classCol}${classOffset}${order ? `order-${order} ` : ''}${className || ''} ${align ? `align-self-${align}` : ''}`}
						onClick={e => onClick ? onClick(e) : ''}
						dangerouslySetInnerHTML={{__html: inner}}
						style={style ? style : undefined}
					/>
					:
					<div
						className={`${classCol}${classOffset}${order ? `order-${order} ` : ''}${className || ''} ${align ? `align-self-${align}` : ''}`}
						onClick={e => onClick ? onClick(e) : ''}
						style={style ? style : undefined}
					>
						{this.props.children}
					</div>
				}
			</>
		);
	}
}

export default Col;
