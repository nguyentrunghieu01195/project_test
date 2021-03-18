/**
 * @description 
 * @since Tuesday, 3 2nd 2021, 14:33:29 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {Translate} from '../../utils/NlsHelper';
import './Pagination.css';
import '../../public/css/style.css';

export interface PropsPagination {
	onPrev?: (e: number) => void,
	onNext?: (e: number) => void,
	onSetPage?: (e: number) => void,
	onSetLimit?: (e: number) => void,
	totalPage: number,
	totalRecord?: number,
	page: number,
	limit: number,
	perPage: Array<number>,
	showPerPage?: boolean,
	showTotalRecord?: boolean,
	isAccount?: boolean,
	locale?: 'vi' | 'en' | 'thai'
}

interface StatePagination {
	page: number,
	limit: number,
	perPage: Array<any>,
	totalPage: number,
	totalRecord?: number,
	showPerPage?: boolean,
	isAccount?: boolean
}

class Pagination extends Component<PropsPagination, StatePagination> {
	constructor(props: PropsPagination) {
		super(props);
		this.state = {
			page: 1,
			limit: props.limit,
			perPage: props.perPage ? props.perPage : [20, 50, 100, 200, 500, 1000],
			totalPage: props.totalPage,
			totalRecord: props.totalRecord,
			showPerPage: props.showPerPage,
			isAccount: props.isAccount
		};
	}

	static getDerivedStateFromProps(props: PropsPagination, state: StatePagination) {
		if (props.totalPage && (props.totalPage !== state.totalPage)) {
			return {
				...state,
				limit: props.limit,
				page: props.page,
				totalPage: props.totalPage,
				totalRecord: props.totalRecord
			};
		}

		if(props.totalRecord && (props.totalRecord !== state.totalRecord)){
			return {
				totalRecord: props.totalRecord,
				page: props.page
			};
		}

		if (props.limit !== state.limit) {
			return { limit: props.limit ? props.limit : 20, page: props.page };
		}
		if (props.page && (props.page !== state.page)) {
			return {
				page: props.page
			};
		}

		if (props.showPerPage && (props.showPerPage !== state.showPerPage)) {
			return {
				showPerPage: props.showPerPage
			};
		}
		return null;
	}

	_onPagePrev() {
		const { page } = this.state;
		this.setState({ page: page - 1 }, () => this.props.onPrev && this.props.onPrev(page - 1));
	}

	_onPressPage(e: any) {
		if (e.keyCode === 13) {
			this.props.onSetPage && this.props.onSetPage(this.state.page);
		}
	}

	_onPageNext() {
		const { page } = this.state;
		this.setState({ page: page + 1 }, () => this.props.onNext && this.props.onNext(page + 1));
	}

	_onSetLimit(e: any) {
		const limit = parseFloat(e.target.value);
		this.setState({ limit }, () => this.props.onSetLimit && this.props.onSetLimit(limit));
	}

	render(){
		const { locale, showTotalRecord, totalRecord } = this.props;
		const { page, showPerPage, limit, perPage, totalPage, isAccount } = this.state;
		const isPrev = page === 1 ? true : false;
		const isNext = page >= totalPage ? true : false;
		const stly = isAccount ? { height: 34, fontSize: 15 } : {};

		const translate = new Translate();
		translate.setLocale(locale ? locale : 'vi');
		
		const t = translate.getTranslate;
		return (
			<>
				{(totalPage > 0 && page > 0) ? (page - 1) * limit + 1 : 0} -&nbsp;
				{(page - 1) * limit + limit}&nbsp;
				{
					showTotalRecord &&
					`${t('of')} ${totalRecord} `
				}
				<ul className="pagination d-inline-flex mb-0">
					<li
						className={`page-item${isPrev ? ' disabled' : ' pointer'}`}
						onClick={() => this._onPagePrev()}>
						<span className={`page-link${isAccount ? ' btn-relation' : ''}`}>
							<i className="fa fa-angle-left font20" />
						</span>
					</li>
					<li
						className={`page-item${isNext ? ' disabled' : ' pointer'}`}
						onClick={() => this._onPageNext()}>
						<span className={`page-link${isAccount ? ' btn-relation' : ''}`}>
							<i className="fa fa-angle-right font20" />
						</span>
					</li>
				</ul>
				{
					showPerPage &&
					<div className="d-inline-block pl-1 pr-1 pt-0">
						<select className="form-control" value={limit} onChange={e => this._onSetLimit(e)}
							style={stly}
						>
							{
								perPage.map((v: number, idx: number) => {
									return (
										<option value={v} key={idx}>
											{t('display_result_number', {value: v})}
										</option>
									);
								})
							}
						</select>
					</div>
				}
			</>
		);
	}
}

export default Pagination;