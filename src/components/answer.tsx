import { $, component$ } from "@builder.io/qwik";
import { toChars } from "~/utils/utils";
import hljs from 'highlight.js/lib/core';
import typescript from "highlight.js/lib/languages/typescript"

interface Item {
	order: number,
	choice: any,
	choiceName: any,
	choiceId: any,
	isCorrect: any
	store: any,
	isCode?: boolean,
}

export const Answer = component$((props: Item) => {
	hljs.registerLanguage('typescript', typescript);

	const handleClick = $(() => {
		props.store.checked = !props.store.checked
	})

	const AnswerContent = (isCode?: boolean) => {
		if ( isCode ) {
			return (
				<pre class="pl-6">
					<code dangerouslySetInnerHTML={ hljs.highlight(props.choice.answer, { language: 'typescript', ignoreIllegals: true }).value } class="!bg-transparent block" />
				</pre>
			)
		}

		return (
			<div class="pl-6 leading-6">
				{ props.choice.answer }
			</div>
		)
	}

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
					<label class="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 ring-green-500 ring-2 border-transparent overflow-auto"
							for={props.choiceId}>
						<span class="absolute top-0 -left-[1px] h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						{AnswerContent(props.isCode)}
					</label>
					<span class="absolute w-5 flex top-0 right-0 h-full px-5 justify-center items-center">👍</span>
				</>
			}

			{ props.isCorrect && !props.store.checked &&
				<>
					<label class="flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent overflow-auto"
							for={props.choiceId}>
						<span class="absolute top-0 -left-[1px] h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						{AnswerContent(props.isCode)}
					</label>
					<span class="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">👍</span>
				</>
			}

			{ !props.isCorrect && 
				<>
					<label class={`flex p-5 bg-slate-700 border-slate-700 cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent overflow-auto ${props.store.checked ? "opacity-30" : ""}`}
							for={props.choiceId}>
						<span class="absolute top-0 -left-[1px] h-full flex justify-center items-center px-3 bg-gray-900">{toChars( props.order )}</span>
						{AnswerContent(props.isCode)}
					</label>
					<span class="absolute hidden w-5 peer-checked:flex top-0 right-0 h-full px-5 justify-center items-center">❌</span>
				</>
			}
			</div>
			</>
	)
})