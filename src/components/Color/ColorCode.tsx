/**
 * @description 
 * @since Friday, 3 5th 2021, 16:33:22 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import {Button} from '../index';
import './ColorCode.css';

export interface PropsColorCode {
	colorSelected?: string,
	colorList: Array<string>,
	onChange?: (color: string) => void
}

interface StateColorCode {
	show: boolean,
	target: any
}

class ColorCode extends Component<PropsColorCode, StateColorCode> {
	constructor(props: PropsColorCode){
		super(props);
		this.state = {
			show: false,
			target: ''
		}
	}
	render(){
		const {colorSelected, colorList, onChange} = this.props;
		const {show, target} = this.state;
		return(
			<>
				<Button
					className="dropdown-toggle"
					onClick={e => this.setState({ show: !show, target: e.target })}
					style={{ padding: '0px 10px', backgroundColor: colorSelected, color: colorSelected === '#ffffff' ? '#000000' : '#ffffff' }}
				>
					<span
						style={{ width: '50px', height: '36px', lineHeight: '36px', backgroundColor: colorSelected, color: colorSelected, display: 'inline-block' }}
					>
						Color
					</span>
				</Button>
				<Overlay
					show={show}
					target={target}
					placement="bottom"
					containerPadding={20}
				>
					<Popover id={`popover_${new Date().getTime()}`} style={{ top: '10px' }} className="pop-task-color">
						<div style={{ height: '34px', border: '1px solid #dddddd', borderStyle: 'inset' }}>
							{
								colorList.map((color, idx) => <div
									key={idx}
									className="option-color-task"
									style={{ backgroundColor: color, width: '34px', height: '32px' }}
									onClick={() => {
										onChange && onChange(color);
										this.setState({ show: false })
									}}
								>
									{colorSelected === color &&
										<i className="fa fa-check checked-color" />
									}
								</div>)
							}
						</div>
					</Popover>
				</Overlay>
			</>
		);
	}
}

export default ColorCode;
