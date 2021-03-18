/**
 * @description 
 * @since Monday, 3 1st 2021, 16:14:21 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Alert.css';

export interface PropsAlert {
	show: boolean,
	type: 'success' | 'warning' | 'info' | 'error',
	title?: any,
	text?: any,
	hideIcon?: boolean,
	onHide?: () => void
}

class GfAlert extends Component<PropsAlert> {
	render(){
		const {show, type, title, text, hideIcon, onHide} = this.props;

		const object_type: any = {
			success: {
				color: '#28a745',
				icon: 'fa fa-check',
				bg_icon: 'bg-success'
			},
			warning: {
				color: '#FFC107',
				icon: 'fa fa-check',
				bg_icon: 'bg-warning'
			},
			info: {
				color: '#0D6EFD',
				icon: 'fa fa-info',
				bg_icon: 'bg-primary'
			},
			error: {
				color: '#DC3545',
				icon: 'fa fa-close',
				bg_icon: 'bg-danger'
			}
		};

		return (
			<div
				className="alert alert-light shadow3"
				style={{borderLeftColor: object_type[type].color, width: '500px', marginBottom: 0, display: show ? '' : 'none'}}
			>
				<div className="row">
					<div className="col-lg-1 p-0 text-center">
						<div className={`alert-icon ${object_type[type].bg_icon}`}>
							<i className={object_type[type].icon} />
						</div>
					</div>
					<div className={hideIcon ? "col-lg-10" : "col-lg-11"}>
						<b className="alert-heading" dangerouslySetInnerHTML={{__html: title}}></b>
						<p className="mb-0" dangerouslySetInnerHTML={{__html: text}}/>
					</div>
					{hideIcon &&
						<div className="col-lg-1 pt-3">
							<a
								className="pointer-event color-span"
								onClick={e => onHide ? onHide() : ''}
							>
								<i className="fa fa-close" />
							</a>
						</div>
					}
					
				</div>
			</div>
		);
	}
}

export default GfAlert;