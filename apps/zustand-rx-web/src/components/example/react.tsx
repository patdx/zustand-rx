import { useObservableState } from 'observable-hooks';
import { useEffect } from 'react';
import { store, bears$, state$ } from './store';

export function ExampleReact() {
  useEffect(() => {
    console.log(`bears$`, bears$, 'state$', state$);
  }, []);
  const bears1 = useObservableState(bears$);
  const bears2 = useObservableState(bears$);
  const state = useObservableState(state$);
  console.log(`render! bears: ${bears1} ${bears2}`, state);
  return (
    <>
      <button
        style={{ background: 'gray', border: '1px darkgray solid' }}
        onClick={store.getState().increment}
      >
        Increase
      </button>
      <div>Bears 1: {bears1}</div>
      <div>Bears 2: {bears2}</div>
    </>
  );
}
