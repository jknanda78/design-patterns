import { h } from 'preact';
import '../../scss/atom-input-field.scss';
import '../../scss/vault-input-field.scss';

export const renderFormField = props => {
	const { label, error, name, children } = props;
	const errMsg = (error && error[name]) ? error[name] : null;

	if (label) {
		return (
			<div class="group">
				{children}
				<span class={(errMsg)?'error':''}>{errMsg}</span>
				<span class="highlight" />
				<span class="bar" />
				<label for={name}>{label}</label>
			</div>
		);
	}

	return (
		<div class="btn-group">
			{children}
		</div>
	);
};

export const AtomDesignInputField = props => (
	<div class="atom-input-field">
		{ renderFormField(props) }
	</div>
);

export const VaultDesignInputField = props => (
	<div class="vault-input-field">
		{ renderFormField(props) }
	</div>
);
