/**
 * @description 
 * @since Saturday, 3 6th 2021, 10:03:00 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {Dropdown, Button} from '../../components';
import './ColorClass.css';

interface Color {
	color: string,
	color_text: string,
	color_bg: string,
	color_fill: string
}

export interface PropsColorClass {
	colorSelected?: Color,
	colorList: Array<Color>,
	type: 'button' | 'circle',
	col?: number,
	text?: string,
	changeColor: (color: Color) => void,
	[propName: string]: any
}

class ColorClass extends Component<PropsColorClass> {
	render(){
		const {colorSelected, colorList, type, text, col, changeColor, ...props} = this.props;
		
		return(
			<Dropdown
				text={text} {...type === 'circle' ? {type} : ''}
				style={{
					backgroundColor: colorSelected ? colorSelected.color : '#ffffff',
					color: '#ffffff'
				}}
				menuStyle={{
					// display: 'flex',
					width: col ? `${col * 45 + 2}px`: '182px',
					minWidth: col ? `${col * 45 + 2}px`: '182px',
					// position: absolute;
					// top: 42px;
					zIndex: 9,
					padding: 0
				}}
				{...props}
				>
				{
					colorList.map((c, idx) => <Button className={`md-pick ${c.color_bg}`} key={idx}
							data-color-text={c.color_text} data-color-fill={c.color_fill}
							data-color-bg={c.color_bg} data-color={c.color}
							onClick={() => changeColor(c)}
						/>
					)
				}
			</Dropdown>
		);
	}
}

export default ColorClass;
