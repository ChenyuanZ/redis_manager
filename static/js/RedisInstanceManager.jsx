import React from 'react';

class RedisInstanceManager extends React.Component {
	render() {
		return (
			<form method="post" action={this.props.url}>
				<h2>Create an Redis Instance</h2>
				<div className="form-group">
					<label>
						Port
						<input name="port" type="text" className="form-control" placeholder="6379" />
					</label>
				</div>
				<div className="form-group">
					<label>
						Password
						<input name="password" type="text" className="form-control" placeholder="password" />
					</label>
				</div>
				<div className="text-right">
					<button type="start" className="btn btn-primary">Start Redis Instance</button>
				</div>
			</form>
		);
	}
}

export default RedisInstanceManager;