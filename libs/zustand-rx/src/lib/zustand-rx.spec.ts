import { toStream } from './zustand-rx';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

describe('zustand-rx', () => {
  it('can be imported', () => {
    expect(toStream).toEqual(expect.any(Function));
  });

  it('can be used with zustand', () => {
    const store = createStore(
      combine({ bears: 0 }, (set) => ({
        increase: (by: number) => set((state) => ({ bears: state.bears + by })),
      })),
    );

    let bears: number | null = null;

    const bears$ = toStream(store, (state) => state.bears, {
      fireImmediately: true,
    });

    const rxSubscription = bears$.subscribe({
      next: (value) => {
        bears = value;
      },
    });

    // can get a value immediately with fireImmediately=true
    expect(bears).toBe(0);

    store.getState().increase(5);

    // update is also immediate
    expect(bears).toBe(5);

    // clean up
    rxSubscription.unsubscribe();
  });
});
