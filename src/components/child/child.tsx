import {
	component$,
	useContext,
} from '@builder.io/qwik';
import { MyContext } from '../parent/parent';

export const Child = component$(() => {
	// Get reference to state using MyContext
	const state = useContext(MyContext);
	return (
		<>
			<button onClick$={() => state.count++}>Increment</button>
		</>
	);
});