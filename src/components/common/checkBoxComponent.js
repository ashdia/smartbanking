import React, { PropTypes, Component } from 'react';
import '../../styles/components/checkbox';

export default class Checkbox extends Component {
	static propTypes = {
		label: PropTypes.node,
		checked: PropTypes.bool,
		disabled: PropTypes.bool,
		onChange: PropTypes.func
	};

	static defaultProps = {
		shape: 'square'
	};

	render() {
		const {	label, checked, disabled, onChange } = this.props;
		const change = (!disabled) ? () => onChange(!checked) : null;

		return (
			<div className="c-checkbox" onClick={change}>
				<input
					className="c-checkbox-input"
					checked={checked}
					type="checkbox"
					onChange={change}
					readOnly={disabled} />
				<span className="c-checkbox-label">{label}</span>
			</div>
		);
	}
}
