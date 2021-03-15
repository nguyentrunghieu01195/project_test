/**
 * @description 
 * @since Thursday, 3 4th 2021, 10:58:26 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Checkbox.css';

export interface PropsCheckbox {
	id: string,
	label?: string,
	value?: any,
	checked?: boolean,
	inline?: boolean,
	disabled?: boolean,
	onChange?: (e: any) => void
}

class Radio extends Component<PropsCheckbox>{
	
	render(){
		const {id, label, value, checked, inline, disabled, ...props} = this.props;
		return(
			<div className={`checkbox${inline ? ' form-check-inline' : ''}`}>
				<input id={id} value={value} type="checkbox" checked={checked ? checked : false} disabled={disabled ? disabled : false} {...props} />
				<span className="check-mark"></span>
				<label className="checkboxContainer" htmlFor={id} dangerouslySetInnerHTML={{__html: label ? label : ''}}></label>
			</div>
		);
	}
}

export default Radio;