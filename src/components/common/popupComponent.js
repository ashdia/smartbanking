import React, { Component, PropTypes } from 'react';
import Popover from 'react-popover';
import classnames from 'classnames';
import '../../styles/components/popup';

export default class Popup extends Component {
	static propTypes = {
		className: PropTypes.string,
		target: PropTypes.node,
		items: PropTypes.array,
		position: PropTypes.oneOf(['above', 'right', 'below', 'left']),
		show: PropTypes.bool,
		hideArrow: PropTypes.bool,
		onClickOuter: PropTypes.func
	};

	buildBody(items) {
		if (!items || items.length === 0) return null;

		return items.map((item, index) => {
			return (<div key={index}>{item.key}</div>);
		});
	}

	render() {
		const { items, target, show, position, onClickOuter, hideArrow, className} = this.props;
		const body = this.buildBody(items);

		return (
			<Popover className={classnames('c-popup-container', className, {'s-popup-arrow': hideArrow})} isOpen={show} body={body} preferPlace={position} onOuterAction={onClickOuter}>
				{target}
			</Popover>
		);
	}
}
