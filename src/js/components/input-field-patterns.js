import { h } from 'preact';

export const Atom = props => (
	<div>
		<p>atom design</p>
		<label for={props.name}>{props.label}</label>
		{props.children}
	</div>
);

export const Vault = props => (
	<div>
		<p>vault design</p>
		<label for={props.name}>{props.label}</label>
		{props.children}
	</div>
);
