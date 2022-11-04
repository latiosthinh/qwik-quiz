import {
	component$,
	useStore,
	useContextProvider,
	createContext,
} from '@builder.io/qwik';
import { Child } from '../child/child';

export const MyContext = createContext('my-context');

export const Parent = component$(() => {
	const state = useStore({
		count: 0,
	});

	useContextProvider(MyContext, state);
	return (
		<>
			<Child />
			<div>Count: {state.count}</div>
		</>
	);
});