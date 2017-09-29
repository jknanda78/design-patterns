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
	<div class="example">
		<form>
			<p>This input field component is built with Atom Design</p>
			<AtomDInputField {...propsForAtom}>
				<InputField {...propsForAtom} />
			</AtomDInputField>

			<AtomDInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</AtomDInputField>
		</form>

		<form>
			<p>This input field component is built with Vault Design</p>
			<VaultDInputField {...propsForVault}>
				<InputField {...propsForVault} />
			</VaultDInputField>

			<VaultDInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</VaultDInputField>
		</form>
	</div>
);

export default App;
