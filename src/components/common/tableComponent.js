import React, {PropTypes} from 'react';
import classnames from 'classnames';
import '../../styles/components/table';

export default class Table extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		dataRows: PropTypes.array,
		columns: PropTypes.array,
		maxBodyHeight: PropTypes.string,
		maxRowHeight: PropTypes.string
	};

	static defaultProps = {
		className: '',
		maxBodyHeight: null,
		maxRowHeight: null
	};

	getColumnWidth(size) {
		switch (size) {
			case 'xsmall':
				return '7.5rem';
			case 'small':
				return '15rem';
			case 'medium':
				return '40rem';
			case 'xlarge':
				return '80rem';
			case 'xxlarge':
				return '100rem';
			default:
				return '25rem';
		}
	}

	renderHeader(columns) {
		return (
			<div className="c-auto-table-thead c-small-header">
				<div className="c-auto-table-tr">
				{
					columns.map((col, index) => {
						return (
							<div
								key={index}
								className={classnames('c-auto-table-th', col.headerClassName)}
								style={{flexBasis: this.getColumnWidth(col.size)}}>
								{col.header}
							</div>);
					})
				}
				</div>
			</div>);
	}

	renderBody(dataRows, columns) {
		const {maxBodyHeight, maxRowHeight} = this.props;
		return (
			<div className="c-auto-table-tbody c-big-body c-scroll" style={{maxHeight: maxBodyHeight}}>
			{
				dataRows.map((row, index) => {
					const rowStyle = {};
					if (maxRowHeight) {
						rowStyle.maxHeight = maxRowHeight;
					}
					return (
						<div key={index} className="c-auto-table-tr" style={rowStyle}>
							{
								columns.map((col, subIndex) => {
									return (
										<div
											key={subIndex}
											className={classnames('c-auto-table-td', col.cellClassName)}
											style={{flexBasis: this.getColumnWidth(col.size)}}>
											{col.content(row, index)}
										</div>);
								})
							}
						</div>);
				})
			}
			</div>);
	}

	render() {
		const { dataRows, columns, className } = this.props;
		return (
			<div className={classnames('c-auto-table', className)}>
				{this.renderHeader(columns)}
				{this.renderBody(dataRows, columns)}
			</div>
		);
	}
}
