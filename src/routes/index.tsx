import type { Signal} from "@builder.io/qwik";
import { $, component$, createContextId, useOnWindow, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Question } from "~/components/question";
import { Answer } from "~/components/answer";
import { questions } from "~/data/questions";

interface IContext {
  id: number,
  checked: boolean
}

export const GlobalContext = createContextId<Signal<IContext>>("GlobalContext");

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  return array;
}

export default component$(() => {
  const data = shuffleArray(questions)

  const state = useStore({
    id: 0,
    checked: false,
  });

  const goToNextQuestion = $(() => {
    if ( state.id == data.length - 1 ) {
			state.id = 0
			return
		}

		state.checked = false
		state.id += 1
  })

  const goToPrevQuestion = $(() => {
		state.id -= 1
  })

  useOnWindow("keydown", $(e => {
    if (e.code != "Space") return;
    state.checked && goToNextQuestion()
  }))


  return (
    <>
      {
        data[state.id] &&
        <>
          <div class="bg-slate-900 h-52 overflow-y-auto p-3 flex justify-center items-center">
            <Question key={'question' + state.id} question={data[state.id].question} />
          </div>
          
          <div class="flex flex-col overflow-y-auto p-3 h-full">
            {
              data[state.id]?.answerOptions.map((choice: any, index: number) => (
                <Answer 
                  key={'answer-' + index + '/' + state.id}
                  order={index}
                  choice={choice} 
                  choiceName={'answer-' + state.id} 
                  choiceId={'answer-' + index + '/' + state.id}
                  isCorrect={choice.isCorrect ?? false}
                  isCode={data[state.id].isCode || false}
                  store={state}
                />
              ))
            }

            <nav class="mt-5 flex justify-center gap-3">
              <button class="bg-green-400 px-5 py-2.5 disabled:bg-slate-500"
                disabled={state.id < 1}
                onClick$={() => goToPrevQuestion()}
              >
                Back
              </button>

              <button class="bg-green-400 px-5 py-2.5 disabled:bg-slate-500"
                disabled={!state.checked}
                onClick$={() => goToNextQuestion()}
              >
                Next
              </button>
            </nav>

            <div class="italic text-center mt-3 text-slate-400 text-sm">
              Hint: Press <strong class="text-green-400">SpaceBar</strong> to navigate to next question!
            </div>
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
