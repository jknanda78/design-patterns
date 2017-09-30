import { h } from 'preact';
import { AtomDesignInputField, VaultDesignInputField } from './js/components/input-field-patterns';
import InputField from '@jsfoobar/input-field';

const propsForAtom = {
	type: 'text',
	name: 'username',
	placeholder: 'email or mobile',
	required: 'required',
	onClick: e => {
		console.log('InputField::Props::onClick', e); // eslint-disable-line no-console
	}
};

const propsForVault = {
	type: 'password',
	name: 'password',
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
			<AtomDesignInputField label="Username">
				<InputField {...propsForAtom} />
			</AtomDesignInputField>

			<AtomDesignInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</AtomDesignInputField>
		</form>

		<form>
			<p>This input field component is built with Vault Design</p>
			<VaultDesignInputField label="Password">
				<InputField {...propsForVault} />
			</VaultDesignInputField>

			<VaultDesignInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</VaultDesignInputField>
		</form>
	</div>
);

export default App;
