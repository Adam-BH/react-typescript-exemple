import './App.css';

import { Person } from './Person';
import { Country } from './Interfaces/User';

function App() {
	return (
		<div className="App">
			<Person
				name="adam"
				age={19}
				email="adam@adam.com"
				isMarried={false}
				country={Country.TN}
				friends={['ahmed', 'saif']}
			/>
		</div>
	);
}

export default App;
