import { useObservableState } from 'observable-hooks';
import { useEffect } from 'react';
import { toStream } from 'zustand-rx';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

const store = createStore(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
);

const bears$ /* Observable<number> */ = toStream(
  store,
  (state) => state.bears,
  {
    fireImmediately: true,
  }
);

const state$ = toStream(store, undefined, { fireImmediately: true });

export function Example() {
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
        onClick={() => store.getState().increase(1)}
      >
        Increase
      </button>
      <div>Bears 1: {bears1}</div>
      <div>Bears 2: {bears2}</div>
    </>
  );
}
