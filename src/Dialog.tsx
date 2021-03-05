import React from 'react';
import './Dialog.scss';

export interface DialogProps {
	content: JSX.Element;
}

export const Dialog: React.FC<DialogProps> = ({ content }) => (
	<div className="Dialog-background">
		<div className="Dialog-foreground">
			{content}
		</div>
	</div>
);
