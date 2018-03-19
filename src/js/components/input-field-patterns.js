import { h } from 'preact';
import '../../scss/donut-input-field.scss';
import '../../scss/kitkat-input-field.scss';

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

export const Pattern1 = props => (
	<div class="donut-input-field">
		{ renderFormField(props) }
	</div>
);

export const Pattern2 = props => (
	<div class="kitkat-input-field">
		{ renderFormField(props) }
	</div>
);
