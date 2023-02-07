// store.ts

import { toStream } from 'zustand-rx';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export const store = createStore(
  combine({ bears: 0 }, (set) => ({
    increment: () => set((state) => ({ bears: state.bears + 1 })),
  }))
);

/* Observable<number> */
export const bears$ = toStream(store, (state) => state.bears, {
  fireImmediately: true,
});

export const state$ = toStream(store, undefined, { fireImmediately: true });
