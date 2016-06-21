import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../../styles/components/dropdown';

export default class Dropdown extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		value: PropTypes.string,
		options: PropTypes.array,
		onChange: PropTypes.func
	};

	optionChanged(val) {
		this.props.onChange(val);
	}

	render() {
		const { className, value, options} = this.props;

		return (
			<div className={classnames('c-list-dropdown', className)}>
				<Select
					value={value}
					searchable={false}
					clearable={false}
					autosize={false}
					options={options}
					onChange={this.optionChanged.bind(this)} />
			</div>
		);
	}
}
