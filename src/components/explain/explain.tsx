import { component$ } from '@builder.io/qwik';

interface Item {
	explain?: string,
}

export const Explain = component$((props: Item) =>
	<div className="mt-12 p-5 bg-slate-900">
		<h2 className="mb-5 font-bold underline underline-offset-2">Explaination </h2>

		{props.explain}
	</div>
);