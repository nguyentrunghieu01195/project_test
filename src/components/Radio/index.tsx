/**
 * @description 
 * @since Thursday, 3 4th 2021, 9:09:24 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Radio.css';

export interface PropsRadio {
	id: string,
	name: string,
	label?: string,
	checked?: boolean,
	inline?: boolean,
	disabled?: boolean,
	onChange?: (e: any) => void
}

class Radio extends Component<PropsRadio>{
	
	render(){
		const {id, name, label, checked, inline, disabled,...props} = this.props;
		return(
			<div className={`radio ${inline ? ' form-check-inline' : ''}`}>
				<input id={id} name={name} type="radio" checked={checked ? checked : false} disabled={disabled ? disabled : false} {...props} />
				<label htmlFor={id} className="radio-label" dangerouslySetInnerHTML={{__html: label ? label : ''}}></label>
			</div>
		);
	}
}

export default Radio;
