import { component$, useContext, $ } from '@builder.io/qwik';
import { QuizContext } from '../../root';
import { toChars } from '../../util/helper'

interface Item {
	order: number,
	choice: any,
	choiceName: any,
	choiceId: any,
	isCorrect: any
}

export const Answer = component$((props: Item) => {
	const state = useContext(QuizContext);

	const handleClick: any = $(() => {
		// @ts-ignore
		state.checked = true;
	})

	return (
		<div className="relative mb-5">
			<input className="sr-only peer" type="radio" 
					name={props.choiceName} id={props.choiceId}
					onClick$={() => handleClick()}
			/>

			{ // @ts-ignore
			props.isCorrect && state.checked &&
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 ring-green-500 ring-2 border-transparent"
						for={props.choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
					<p className="pl-6">{props.choice.answer}</p>
				</label>
				<div className="absolute w-5 flex top-0 right-0 h-full px-5 justify-center items-center">👍</div>
				</>
			}

			{ // @ts-ignore
			props.isCorrect && !state.checked &&
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
						for={props.choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
					<p className="pl-6">{props.choice.answer}</p>
				</label>
				<div className="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👍</div>
				</>
			}

			{ !props.isCorrect && 
				<>
				<label className="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent"
						for={props.choiceId}>
					<span className="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
					<p className="pl-6">{props.choice.answer}</p>
				</label>
				<div className="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👎</div>
				</>
			}
		</div>
	)
});