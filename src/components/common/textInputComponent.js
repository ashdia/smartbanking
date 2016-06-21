import React, {PropTypes} from 'react';
import classnames from 'classnames';
import '../../styles/components/textInput';

export default class TextInput extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		value: PropTypes.string,
		hint: PropTypes.node,
		disabled: PropTypes.bool,
		onChange: PropTypes.func
	};

	onChange(e) {
		const value = e.target.value;
		this.props.onChange(value);
	}

	render() {
		const { value, disabled, className } = this.props;

		return (
			<div className={classnames('c-text', className)}>
				<input
					ref="inputRef"
					className="c-text-input"
					value={value}
					onChange={this.onChange.bind(this)}
					disabled={disabled} />
			</div>
		);
	}
}
