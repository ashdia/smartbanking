import React, { PropTypes } from 'react';

export default class Icon extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		size: PropTypes.oneOf([12, 16, 20, 24, 32, 64, 128]),
		title: PropTypes.string,
		glyph: PropTypes.string
	};

	static defaultProps = {
		size: 16,
		title: '',
		className: '',
		glyph: ''
	};

	static sizeProps = {
		size_12: {
			stroke: '1px',
			width: '12px'
		},
		size_16: {
			stroke: '1px',
			width: '16px'
		},
		size_20: {
			stroke: '2px',
			width: '20px'
		},
		size_24: {
			stroke: '2px',
			width: '24px'
		},
		size_32: {
			stroke: '2px',
			width: '32px'
		},
		size_64: {
			stroke: '2px',
			width: '64px'
		},
		size_128: {
			stroke: '4px',
			width: '128px'
		}
	};

	getSizeProp() {
		const { size } = this.props;
		switch (size) {
			case 12:
				return Icon.sizeProps.size_12;
			case 16:
				return Icon.sizeProps.size_16;
			case 20:
				return Icon.sizeProps.size_20;
			case 24:
				return Icon.sizeProps.size_24;
			case 32:
				return Icon.sizeProps.size_32;
			case 64:
				return Icon.sizeProps.size_64;
			default:
				return Icon.sizeProps.size_128;
		}
	}

	render() {
		const { className, title, glyph } = this.props;
		const sizeProp = this.getSizeProp();
		return (
			<svg className={className}
				width={sizeProp.width}
				height={sizeProp.width}
				strokeWidth={sizeProp.stroke}
				aria-labelledby="title">
				<title>{title}</title>
				<use xlinkHref={glyph} />
			</svg>
		);
	}
}
