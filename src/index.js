import { h } from 'preact';
import { Atom } from './js/components/input-field-patterns';
import InputField from '@jsfoobar/input-field/src/js/components/input-field';

const props = {
	type: 'text',
	name: 'username',
	onClick: e => {
		console.log('InputField::Props::onClick', e);
	}
};

const App = () => (
	<Atom {...props}>
		<InputField {...props} />
	</Atom>
);

export default App;
