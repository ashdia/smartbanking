import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Icon from './iconComponent';
import '../../styles/components/button';

export default class Button extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.shape({
			glyph: PropTypes.string,
			alt: PropTypes.string,
			size: PropTypes.number
		}),
		children: PropTypes.node,
		size: PropTypes.oneOf(['small', 'regular', 'large']),
		type: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'inverted', 'radiogroup']),
		disabled: PropTypes.bool,
		onClick: PropTypes.func
	};

	static defaultProps = {
		className: '',
		icon: null,
		text: null,
		size: 'regular',
		type: 'primary',
		disabled: false
	};

	render() {
		const { className, children, icon, type, size, disabled, onClick} = this.props;
		let iconNode = null;
		let span = null;
		let combineClass = '';
		if (icon) {
			iconNode = (<Icon className={'c-button-icon'} glyph={icon.glyph} title={icon.alt} size={icon.size} />);
			combineClass = 'c-button-combined';
		}
		if (children) {
			span = (<span className={classnames(combineClass, 'c-button-text')}>{children}</span>);
		}
		return (
			<div
				className={classnames('c-button', `c-button-${type}`, `c-button-${size}`, className)}
				disabled={disabled}
				onClick={(disabled) ? null : onClick}>
				{iconNode}
				{span}
			</div>
		);
	}
}
