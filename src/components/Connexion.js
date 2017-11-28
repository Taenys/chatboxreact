import React from 'react';

class Connexion extends React.Component {

	goToChat = event => {
		event.preventDefault();
		//récupérer le pseudo
		const pseudo = this.pseudoInput.value;
		//changer l'url
		this.context.router.transitionTo(`/pseudo/${pseudo}`);
	};

	render() {
		return (
			<div className="connexionBox" onSubmit={e => this.goToChat(e)}>
				<form className="connexion" >
					<input
						type="text"
						placeholder="Pseudo" required
						ref={input => {this.pseudoInput = input}}/>
					<button type="submit">GO</button>
				</form>
			</div>
		)
	}
	static contextTypes = {
		router: React.PropTypes.object
	}
}

export default Connexion;