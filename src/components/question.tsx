import { component$ } from '@builder.io/qwik';

interface Item {
	question: string,
	isRandom: boolean
}

export const Question = component$((props: Item) =>
	<div class="max-w-3xl relative h-full">
		<h2 class="text-lg">{props.question}</h2>

		<label class="inline-flex items-center cursor-pointer absolute bottom-0 left-0">
			<input type="checkbox" class="sr-only peer" onChange$={() => props.isRandom = !props.isRandom} checked={props.isRandom} />
			<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
			<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				Random mode {props.isRandom ? "ON" : "OFF"}
			</span>
		</label>
	</div>


);