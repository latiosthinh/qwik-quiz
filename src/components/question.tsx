import { component$ } from '@builder.io/qwik';

interface Item {
	question: string,
}

export const Question = component$((props: Item) =>
	<h2 class="text-lg">{props.question}</h2>
);