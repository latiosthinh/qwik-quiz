import { useStore, useContextProvider, createContext, component$, $ } from '@builder.io/qwik';
import { QwikCity } from '@builder.io/qwik-city';
import { Question } from "./components/question/question";
import { Answer } from "./components/answer/answer";
import { questions } from "./data/questions";
import "./styles/global.css";
import { Explain } from './components/explain/explain';

export const QuizContext = createContext('quiz-context');

export default component$(() => {
  const state = useStore({ 
    id: 0,
    checked: false
  });

  const handleNext = $(() => {
		if ( state.id == questions.length - 1 ) {
			state.id = 0
			return
		}

		state.checked = false
		state.id += 1
	})

  useContextProvider(QuizContext, state);

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
      <main className="bg-slate-800 v-screen h-screen text-white flex overflow-hidden">
          {
            questions[state.id] &&
            <>
            <div className="flex-auto w-2/5 bg-slate-900 h-full overflow-y-auto p-3">
              <Question key={'question' + state.id} question={questions[state.id].question} />
            </div>
            
            <div className="flex-auto w-3/5 h-screen flex flex-col overflow-y-auto p-3">
            {
              questions[state.id].answerOptions.map((choice, index) => (
                <Answer 
                  key={'answer-' + index + '/' + state.id}
                  order={index}
                  choice={choice} 
                  choiceName={'answer-' + state.id} 
                  choiceId={'answer-' + index + '/' + state.id}
                  isCorrect={choice.isCorrect ?? false}
                  />
            ))}

              <nav className="mt-5">
                <button className="bg-green-400 px-5 py-2.5" onClick$={() => handleNext()}>Next</button>
              </nav>

              {
                state.checked && questions[state.id].explain &&
                <Explain key={'explain-' + state.id} explain={questions[state.id].explain} />
              }
            </div>
            </>
          }
        </main>
      </body>
    </QwikCity>
  );
});
