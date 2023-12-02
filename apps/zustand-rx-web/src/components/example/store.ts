// store.ts

import { toStream } from 'zustand-rx';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer';

export const store = createStore(
  combine({ bears: 0 }, (set) => ({
    increment: () => set((state) => ({ bears: state.bears + 1 })),
  })),
);

export const immerStore = createStore(
  immer(
    combine({ bears: 0 }, (set) => ({
      increment: () => set((state) => ({ bears: state.bears + 1 })),
    })),
  ),
);

// Test to make sure immer store works too
toStream(immerStore, (store) => store.bears);

/* Observable<number> */
export const bears$ = toStream(store, (state) => state.bears, {
  fireImmediately: true,
});

export const state$ = toStream(store, undefined, { fireImmediately: true });
