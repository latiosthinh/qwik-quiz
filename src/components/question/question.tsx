import { component$ } from '@builder.io/qwik';

export const Question = component$(( item: any ) =>
	<h2>{item.question}</h2>
);