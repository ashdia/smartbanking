import React, { PropTypes } from 'react';
import {Button, TextInput} from '../components';
import { Link } from 'react-router';
import { NAVIGATION } from '../constants/navigation';
import '../styles/containers/login';

export default class Login extends React.Component {
	static propTypes = {
		test: PropTypes.number
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
			name: '',
			password: ''
		};
	}

	componentWillMount() {
	}


	render() {
		return (
			<div className="c-login">
				<div className="c-login-title">客户关系管理</div>
				<div className="c-login-panel">
					<div className="c-login-panel-input">
						<div className="c-login-panel-input-label">用户名： </div>
						<div className="c-login-panel-input-field">
							<TextInput value={this.state.name} onChange={(value) => this.setState({name: value})}/>
						</div>
					</div>
					<div className="c-login-panel-input">
						<div className="c-login-panel-input-label">密码： </div>
						<div className="c-login-panel-input-field">
							<TextInput value={this.state.password} onChange={(value) => this.setState({password: value})}/>
						</div>
					</div>
					<div className="c-login-panel-buttons">
						<div className="c-login-panel-buttons-login"><Link to={NAVIGATION.HOME.LINK}>登录</Link></div>
						<Button type="primary" onClick={() => console.log('register')} size="small">注册</Button>
					</div>
				</div>
			</div>
		);
	}
}
