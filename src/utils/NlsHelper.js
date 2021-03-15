/**
 * @description 
 * @since Tuesday, 3 2nd 2021, 16:44:27 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

const replateString = (string, values = {}) => {
	try{
		let array_keys = Object.keys(values);
		array_keys.map(key => {return string = string.replaceAll("${{"+key+"}}", values[key])});

		return string;
	} catch {
		return string;
	}
};

class Translate {
	static locale = '';

	setLocale = (locale = 'vi') => {
		this.locale = locale;
	}

	getTranslate = (key = '', values = {}) => {
		let nls = require(`../nls/${this.locale}.json`);
	
		let string = nls && nls[key] ? nls[key] : key;
		return replateString(string, values);
	};
}

export {replateString, Translate};
