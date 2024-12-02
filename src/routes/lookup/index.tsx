import { $, component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import hljs from "highlight.js";
import type { IQuestion } from "~/data/questions";
import { questions } from "~/data/questions";

export default component$(() => {
	const state: { list: IQuestion[] } = useStore({
		list: []
	})

	const handleInputChange = $((e: any) => {
		state.list = questions.filter(q => q.question.includes(e.target.value))
	})

	return (
		<>
			<section class="bg-slate-900 h-52 overflow-y-auto p-3 flex justify-center items-center relative">
				<label>
					<input type="text" onInput$={e => handleInputChange(e)}
						class="text-black py-2 px-3 min-w-96"
						placeholder="Enter keyword here"
						autoComplete={"off"}
						autoFocus
					/>
				</label>

				<Link href="/" class="absolute bottom-3 right-3 underline text-green-400">Go To Test</Link>
			</section>

			{!!state.list.length &&
				<section class="flex flex-col gap-4 p-3 h-full">
					{state.list.map((q, index) => (
						<div key={index} class="p-2 bg-slate-900">
							<div class="mb-2">{q.question}</div>
							{q.answerOptions.filter(a => a.isCorrect).map((a, index) => (
								<div key={index} class="mb-2 text-green-400">
									{!q.isCode && <p>{a.answer}</p>}
									{q.isCode && <pre>
										<code dangerouslySetInnerHTML={ hljs.highlight(a.answer, { language: 'typescript', ignoreIllegals: true }).value } class="!bg-transparent block !p-0" />
									</pre>}
								</div>
							))}
						</div>
					))}
				</section>
			}
		</>
	)
})