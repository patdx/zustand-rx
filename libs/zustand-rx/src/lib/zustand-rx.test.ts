import { toStream } from './zustand-rx';
import { take } from 'rxjs/operators';
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

  it('does not lose a store update triggered by the initial emission', () => {
    const store = createStore<{ count: number }>()(() => ({ count: 0 }));
    const values: number[] = [];

    const subscription = toStream(store, (state) => state.count, {
      fireImmediately: true,
    }).subscribe((count) => {
      values.push(count);
      if (count === 0) {
        store.setState({ count: 1 });
      }
    });

    expect(values).toEqual([0, 1]);
    subscription.unsubscribe();
  });

  it('detaches the store listener after synchronous RxJS completion', () => {
    let activeListeners = 0;
    const store = {
      getState: () => ({ count: 0 }),
      subscribe: () => {
        activeListeners += 1;
        return () => {
          activeListeners -= 1;
        };
      },
    };

    toStream(store, (state) => state.count, { fireImmediately: true })
      .pipe(take(1))
      .subscribe();

    expect(activeListeners).toBe(0);
  });
});
