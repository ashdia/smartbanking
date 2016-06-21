import React, {PropTypes} from 'react';
import '../styles/components/controlPanel';

export default class ControlPanel extends React.Component {
	static propTypes = {
		userName: PropTypes.string
	};

	render() {
		const { userName } = this.props;

		return (
			<div className="c-control-panel">
				<div className="c-control-panel-user">用户名： {userName}</div>
				<div className="c-control-panel-items">
					<div className="c-control-panel-item">客户名单</div>
					<div className="c-control-panel-item">成交记录</div>
					<div className="c-control-panel-item">任务单</div>
					<div className="c-control-panel-item">日历</div>
				</div>
			</div>
		);
	}
}
