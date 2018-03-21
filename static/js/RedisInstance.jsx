import React from 'react';

class RedisInstance extends React.Component {
	render() {
		return (
			<div>
				localhost:{this.props.port}
			</div>
		);
	}
}

export default RedisInstance;