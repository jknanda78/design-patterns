import { h } from 'preact';
import '../../scss/atom-input-field.scss';
import '../../scss/vault-input-field.scss';

export const AtomDInputField = props => (
	<div class="atom-input-field">
		<div class="group">
			{props.children}
			<span class="highlight" />
			<span class="bar" />
			<label for={props.name}>{props.label}</label>
		</div>
	</div>
);

export const VaultDInputField = props => (
	<div class="vault-input-field">
		<div class="group">
			{props.children}
			<span class="highlight" />
			<span class="bar" />
			<label for={props.name}>{props.label}</label>
		</div>
	</div>
);
