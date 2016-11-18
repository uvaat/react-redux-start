import React from 'react';

class Form extends React.Component{

	submit(event){

		event.preventDefault();
		this.props.create(user);

		return;

	}

	render() {

		let bntCancel = '';
		if(this.props.cancel)
			bntCancel = <a className="button" onClick={this.props.cancel}>Annuler</a>

		return (
			<form className="form" onSubmit={this.submit.bind(this)}>
				<div className="item-form item-text">
					<input type="text" ref="" placeholder="" />
				</div>
				<div className="item-form">
					<button className="button button-submit">Envoyer</button>
					{bntCancel}
				</div>
			</form>
			);

	}

}

export default Form;