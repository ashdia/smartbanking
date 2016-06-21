import React, {PropTypes} from 'react';
import {Icon} from '../';
import searchIcon from '../../styles/icons/search_32.svg';
import '../../styles/components/searchBox';

export default class SearchBox extends React.Component {
	static propTypes = {
		onChange: PropTypes.func
	};

	render() {
		const { onChange } = this.props;

		return (
			<div className="c-search-box">
				<input className="c-search-box-input"
					type="search"
					placeholder="搜索客户"
					onChange={ (e) => onChange(e.target.value) } />
				<Icon className="c-search-box-icon" glyph={searchIcon} size={24} />
			</div>
		);
	}
}
