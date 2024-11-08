import { $, component$, useStore } from "@builder.io/qwik";
import { toChars } from "~/utils/utils";

interface Item {
	order: number,
	choice: any,
	choiceName: any,
	choiceId: any,
	isCorrect: any
	store: any
}

export const Answer = component$((props: Item) => {
	const handleClick = $(() => {
		props.store.checked = !props.store.checked
	})

	return (
		<>
		<div class={`relative mb-5 group ${props.store.checked && "pointer-events-none"}`}>
			<input class="sr-only peer" type="checkbox" 
					name={props.choiceName} id={props.choiceId}
					onChange$={() => handleClick()}
					checked={props.store.checked}
					disabled={props.store.checked}
			/>

			{ props.isCorrect && props.store.checked &&
				<>
					<label class="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 ring-green-500 ring-2 border-transparent"
							for={props.choiceId}>
						<span class="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						<p class="pl-6">{props.choice.answer}</p>
					</label>
					<span class="absolute w-5 flex top-0 right-0 h-full px-5 justify-center items-center">👍</span>
				</>
			}

			{ props.isCorrect && !props.store.checked &&
				<>
					<label class="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
							for={props.choiceId}>
						<span class="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						<p class="pl-6">{props.choice.answer}</p>
					</label>
					<span class="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👍</span>
				</>
			}

			{ !props.isCorrect && 
				<>
					<label class={`flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent ${props.store.checked ? "opacity-30" : ""}`}
							for={props.choiceId}>
						<span class="absolute top-0 left-0 h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						<p class="pl-6">{props.choice.answer}</p>
					</label>
					<span class="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">❌</span>
				</>
			}
			</div>
			</>
	)
})