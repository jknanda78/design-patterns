import { h } from 'preact';
import { AtomDesignInputField, VaultDesignInputField } from './js/components/input-field-patterns';
import InputField from '@jsfoobar/input-field';

const renderAtomDesignInputField = () => {
	const propsForInputField = {
		type: 'text',
		name: 'username',
		placeholder: 'email or mobile',
		required: 'required',
		label: 'Username',
		error: {
			username: 'cannot be empty'
		},
		onClick: e => {
			console.log('InputField::Props::onClick', e); // eslint-disable-line no-console
		}
	};

	const { label, error, ...props } = propsForInputField;

	return (
		<AtomDesignInputField label={label} error={error} name={props.name}>
			<InputField {...props} />
		</AtomDesignInputField>
	);
}

const renderVaultDesignInputField = () => {
	const propsForInputField = {
		type: 'password',
		name: 'password',
		placeholder: 'minimum 6 characters',
		required: 'required',
		label: 'Password',
		error: {
			password: 'minimum 6 characters'
		},
		onKeyUp: e => {
			console.log('InputField::Props::onKeyUp', e); // eslint-disable-line no-console
		}
	};

	const { label, error, ...props } = propsForInputField;

	return (
		<VaultDesignInputField label={label} error={error} name={props.name}>
			<InputField {...props} />
		</VaultDesignInputField>
	);
}

const App = () => (
	<div class="example">
		<form>
			<h2>This input field component is built with Atom Design</h2>
			{renderAtomDesignInputField()}
			<AtomDesignInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</AtomDesignInputField>
		</form>

		<form>
			<h2>This input field component is built with Vault Design</h2>
			{renderVaultDesignInputField()}
			<VaultDesignInputField>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</VaultDesignInputField>
		</form>
	</div>
);

export default App;
