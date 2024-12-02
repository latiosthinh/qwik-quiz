import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import hljs from "highlight.js";
import { questions } from "~/data/questions";

export default component$(() => {
	const keyword = useSignal("")
	const state = useComputed$(() => {
		return questions.filter(q => q.question.toLowerCase().includes(keyword.value.toLowerCase()))
	})

	const handleInputChange = $((e: any) => {
		keyword.value = e.target.value.toLowerCase()
	})

	return (
		<>
			<section class="bg-slate-900 h-52 overflow-y-auto p-3 flex justify-center items-center relative">
				<label>
					<input type="text" onKeyUp$={e => handleInputChange(e)}
						class="text-black py-2 px-3 min-w-96"
						placeholder="Enter keyword here"
						autoComplete={"off"}
						autoFocus
					/>
				</label>

				<Link href="/" class="absolute bottom-3 right-3 underline text-green-400">Go To Test</Link>
			</section>

			{!!state.value.length &&
				<section class="flex flex-col gap-4 p-3 h-full">
					{state.value.map((q, index) => (
						<div key={index} class="p-2 bg-slate-900 overflow-auto">
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