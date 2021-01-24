import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './pages/About';

const App = () => {
	return (
		<main>
			<Switch>
				<Route path="/" component={About} />
			</Switch>
		</main>
	);
};

export default App;