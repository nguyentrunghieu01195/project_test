/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 9:13:32 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {Translate} from '../../utils/NlsHelper';
import Row from '../Layout/Row';
import Col from '../Layout/Column';

export interface PropsEmptyState {
	type?: 'data' | 'order' | 'task' | 'customer' | 'voucher' | 'product' | 'fund',
	locale?: 'vi' | 'en' | 'thai',
	text?: string
}

class EmptyState extends Component<PropsEmptyState>{
	renderEmptyState(img: string, text: string){
		return(
			<Row>
				<Col lg={4} offsetLg={4} className="text-center">
					<img src={img} className="img-fluid" alt="No data"/>
					<p className="pt-2 font-weight-bold">{text}</p>
				</Col>
			</Row>
		);
	}

	render(){
		const {type, locale, text} = this.props;
		
		const translate = new Translate();
		translate.setLocale(locale ? locale : 'vi');
		const t = translate.getTranslate;

		switch(type){
			case 'data':
				return this.renderEmptyState(require('./image/empty_data.png'), text ? text : t('no_data'));
			case 'order':
				return this.renderEmptyState(require('./image/empty_order.png'), text ? text : t('no_orders_found'));
			case 'task':
				return this.renderEmptyState(require('./image/empty_task.png'), text ? text : t('no_tasks_found'));
			case 'customer':
				return this.renderEmptyState(require('./image/empty_customer.png'), text ? text : t('no_customers_found'));
			case 'voucher':
				return this.renderEmptyState(require('./image/empty_voucher.png'), text ? text : t('no_data'));
			case 'product':
				return this.renderEmptyState(require('./image/empty_product.png'), text ? text : t('no_products_found'));
			case 'fund':
				return this.renderEmptyState(require('./image/empty_fund.png'), text ? text : t('no_funds_found'));
			default:
				return(<></>)
		}
	}
}

export default EmptyState;