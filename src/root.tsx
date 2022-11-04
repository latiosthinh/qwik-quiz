import { component$, } from '@builder.io/qwik';
import { Parent } from './components/parent/parent';

export default component$(() => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Parent />
      </body>
    </>
  );
});
