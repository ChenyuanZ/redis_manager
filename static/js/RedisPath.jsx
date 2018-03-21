import React from 'react';

class RedisPath extends React.Component {
	render() {
		return (
			<form method="post" action={this.props.url}>
				<h2>Redis Bin Path</h2>
				<div className="form-group">
				    <label>Current Path: {this.props.path}</label>
					<label>
					    Reset Path
						<input name="path" type="text" className="form-control" placeholder="..." />
					</label>
				</div>
				<div className="text-right">
					<button type="set_path" className="btn btn-primary">Reset Redis Bin Path</button>
				</div>
			</form>
		);
	}
}

export default RedisPath;