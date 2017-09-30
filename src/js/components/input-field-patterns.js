import { h } from 'preact';
import '../../scss/atom-input-field.scss';
import '../../scss/vault-input-field.scss';

export const renderFormField = props => {
	if (props.label) {
		return (
			<div class="group">
				{props.children}
				<span class="highlight" />
				<span class="bar" />
				<label for={props.name}>{props.label}</label>
			</div>
		);
	}

	return (
		<div class="btn-group">
			{props.children}
		</div>
	);
};

export const AtomDInputField = props => (
	<div class="atom-input-field">
		{ renderFormField(props) }
	</div>
);

export const VaultDInputField = props => (
	<div class="vault-input-field">
		{ renderFormField(props) }
	</div>
);
