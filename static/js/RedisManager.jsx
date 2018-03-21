import React from 'react';
import RedisPath from './RedisPath.jsx';
import RedisInstanceList from './RedisInstanceList.jsx';
import RedisInstanceManager from './RedisInstanceManager.jsx';

class RedisManager extends React.Component {
	render() {
		return (
			<div>
			    <RedisPath url={this.props.set_path_url} path={this.props.path} />
				<RedisInstanceList instances={this.props.instances} />
				<RedisInstanceManager url={this.props.start_instance_url} />
			</div>
		);
	}
}

export default RedisManager;