import React from 'react';
import RedisInstance from './RedisInstance.jsx';

class RedisInstanceList extends React.Component {
	render() {
		if (!this.props.instances.length) {
			return null;
		}
		var instanceNodes = this.props.instances.map((instance, index) => {
			return <RedisInstance port={instance.port} key={index} />;
		});
		return (
			<div>
				<h2>Redis Instances</h2>
				{instanceNodes}
			</div>
		);
	}
}

export default RedisInstanceList;