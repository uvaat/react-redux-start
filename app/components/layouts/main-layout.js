import React from 'react';

class MainLayout extends React.Components{

	render (){(
		<div>
			<header id="header"></header>
			<main id="main">
				{props.children}
			</main>
		</div>
		)
	}

}
