/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 13:46:22 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {Translate} from '../../utils/NlsHelper';
import Row from '../Layout/Row';
import Col from '../Layout/Column';
import Button from '../Button';

export interface PropsError {
	type?: 'not_found' | 'access_denied',
	locale?: 'vi' | 'en' | 'thai',
	img_type?: 1 | 2 | 3
}

class Error extends Component<PropsError>{
	render(){
		const {type, locale, img_type} = this.props;

		const translate = new Translate();
		translate.setLocale(locale ? locale : 'vi');
		const t = translate.getTranslate;

		let img = '';
		switch(img_type){
			case 1:
				img = require('./image/empty_404.png');
				break;
			case 2:
				img = require('./image/empty_404_2.png');
				break;
			case 3:
				img = require('./image/empty_404_3.png');
				break;
			default:
				return img = require('./image/empty_404.png');
		}

		switch(type){
			case 'not_found':
				return(
					<Row>
						<Col lg={8} className="text-center">
							<img src={img} className="img-fluid" alt="Page not found"/>
						</Col>
						<Col lg={4} className="p-4 text-center">
							<h1 className="font-weight-bold color-blue font50">{t('page_not_exist')}</h1>
							<p className="font24">{t('page_not_exist_txt')}</p>
							<Button type="primary" className="mt-3" onClick={() => window.location.hash = '/'}>{t('go_to_home')}</Button>
						</Col>
					</Row>
				);
			case 'access_denied':
				return(
					<Row>
						<Col lg={8} className="text-center">
							<img src={img} className="img-fluid" alt="Access denied"/>
						</Col>
						<Col lg={4} className="p-4 text-center">
							<h1 className="font-weight-bold color-blue font50">{t('ooops')}</h1>
							<p className="font24">{t('txt_ooops')}</p>
							<Button type="primary" className="mt-3" onClick={() => window.location.hash = '/'}>{t('go_to_home')}</Button>
						</Col>
					</Row>
				);
			default:
				return(<></>);
		}
	}
}

export default Error;
