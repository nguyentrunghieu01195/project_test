/**
 * @description   
 * @since         Wednesday, 3 10th 2021, 14:55:43 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Input.css';

export interface PropsInput {
	type?: 'text' | 'number' | 'password' | 'color' | 'hidden' | 'range' | 'time' | 'date' | 'datetime-local' | 'week' | 'month' | 'textarea',
	inputFocus: boolean,
	placeholder: string,
	disabled: boolean,
	valid: boolean,
	textValid: string,
	value?: string,
	onChange?: (e:any) => void,
	onBlur?: (e:any) => void,
	onKeyDown?: (e:any) => void
}

class Input extends Component<PropsInput> {
	render() {
		const { type, inputFocus, placeholder, disabled, valid, textValid, value, onChange, onBlur, onKeyDown } = this.props;
		return (
			<>
				{
					type === 'textarea'
						?
						<textarea className="form-control"
							value={value}
							onChange={e => onChange && onChange(e)}
							onBlur={e => onBlur && onBlur(e)}
							onKeyDown={e => onKeyDown && onKeyDown(e)}
						/>
						:
						valid !== undefined
							?
							<div className="icon-addon addon-lg position-relative">
								<input type={type} className={`form-control ${inputFocus ? 'input-focus' : ''} ${valid ? 'pr30 border-success' : 'pr30 border-danger'}`}
									placeholder={placeholder} disabled={disabled}
									value={value}
									onChange={e => onChange && onChange(e)}
									onBlur={e => onBlur && onBlur(e)}
									onKeyDown={e => onKeyDown && onKeyDown(e)}
								/>
								{
									valid
										?
										<label className="fa fa-check input-icon-right color-success" />
										:
										<label className="fa fa-close input-icon-right color-danger" />
								}
								{
									textValid && <span className={`color-${valid ? 'success' : 'danger'} font12`}>
										{textValid}
									</span>
								}
							</div>
							:
							<input type={type} className={`form-control ${inputFocus ? 'input-focus' : ''}`}
								placeholder={placeholder} disabled={disabled}
								value={value}
								onChange={e => onChange && onChange(e)}
								onBlur={e => onBlur && onBlur(e)}
								onKeyDown={e => onKeyDown && onKeyDown(e)}
							/>
				}
			</>
		)
	}
}

export default Input;
