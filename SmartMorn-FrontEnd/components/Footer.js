import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(this.props.disable != undefined)
			return (
				<div>
					This is Footer.
				</div>
			)
		else 
			return ``;
	}
}