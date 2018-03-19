import { h } from 'preact';
import { Pattern1, Pattern2 } from './js/components/input-field-patterns';
import InputField from '@jsfoobar/input-field';

const renderPattern1DesignInputField = () => {
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
		<Pattern1 label={label} error={error} name={props.name}>
			<InputField {...props} />
		</Pattern1>
	);
};

const renderPattern2DesignInputField = () => {
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
		<Pattern2 label={label} error={error} name={props.name}>
			<InputField {...props} />
		</Pattern2>
	);
};

const App = () => (
	<div class="example">
		<form>
			<h2>This input field component is built with Pattern1 Design</h2>
			{renderPattern1DesignInputField()}
			<Pattern1>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</Pattern1>
		</form>

		<form>
			<h2>This input field component is built with Pattern2 Design</h2>
			{renderPattern2DesignInputField()}
			<Pattern2>
				<InputField name="submit" type="submit" value="Submit" />
				<InputField name="cancel" type="button" value="Cancel" />
			</Pattern2>
		</form>
	</div>
);

export default App;
