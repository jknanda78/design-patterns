import { h } from 'preact';
import { AtomDInputField, VaultDInputField } from './js/components/input-field-patterns';
import InputField from '@jsfoobar/input-field';

const propsForAtom = {
	type: 'text',
	name: 'username',
	label: 'Username',
	placeholder: 'email or mobile',
	required: 'required',
	onClick: e => {
		console.log('InputField::Props::onClick', e); // eslint-disable-line no-console
	}
};

const propsForVault = {
	type: 'password',
	name: 'password',
	label: 'Password',
	placeholder: 'minimum 6 characters',
	required: 'required',
	onKeyUp: e => {
		console.log('InputField::Props::onKeyUp', e); // eslint-disable-line no-console
	}
};

const App = () => (
	<form>
		<AtomDInputField {...propsForAtom}>
			<InputField {...propsForAtom} />
		</AtomDInputField>

		<VaultDInputField {...propsForVault}>
			<InputField {...propsForVault} />
		</VaultDInputField>
	</form>
);

export default App;
