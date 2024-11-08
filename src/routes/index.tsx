import type { Signal} from "@builder.io/qwik";
import { $, component$, createContextId, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Question } from "~/components/question";
import { Answer } from "~/components/answer";
import { questions } from "~/data/questions";

interface IContext {
  id: number,
  checked: boolean
}

export const GlobalContext = createContextId<Signal<IContext>>("GlobalContext");

export default component$(() => {
  const state = useStore({
    id: 0,
    checked: false
  });

  const goToNextQuestion = $(() => {
    if ( state.id == questions.length - 1 ) {
			state.id = 0
			return
		}

		state.checked = false
		state.id += 1
  })

  return (
    <>
      {
        questions[state.id] &&
        <>
          <div class="bg-slate-900 h-[30vh] overflow-y-auto p-3 flex justify-center items-center">
            <Question key={'question' + state.id} question={questions[state.id].question} />
          </div>
          
          <div class="flex flex-col overflow-y-auto p-3">
            {
              questions[state.id].answerOptions.map((choice, index) => (
                <Answer 
                  key={'answer-' + index + '/' + state.id}
                  order={index}
                  choice={choice} 
                  choiceName={'answer-' + state.id} 
                  choiceId={'answer-' + index + '/' + state.id}
                  isCorrect={choice.isCorrect ?? false}
                  store={state}
                />
              ))
            }

            <nav class="mt-5 flex justify-center">
              <button class="bg-green-400 px-5 py-2.5 disabled:bg-slate-500" disabled={!state.checked} onClick$={() => goToNextQuestion()}>Next</button>
            </nav>
          </div>
        </>
      }
    </>
  );
});

export const head: DocumentHead = {
  title: "Quiz v2",
  meta: [
    {
      name: "description",
      content: "made from ♡ with Qwikjs",
    },
  ],
};
