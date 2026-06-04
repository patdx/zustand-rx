import { toStream } from './zustand-rx';
import { combine } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import { createStore as createStore4 } from 'zustand4/vanilla';
import createStore3 from 'zustand3/vanilla';
import type { Observable } from 'rxjs';

type CountState = { count: number };

/** Minimal store shape we exercise in these tests. */
interface ReadWriteStore<T> {
  getState(): T;
  setState(state: T): void;
  subscribe(listener: (state: T, prevState: T) => void): () => void;
}

/**
 * Smoke-test that toStream accepts a store from each zustand version.
 *
 * We accept a wider ReadWriteStore and cast inside the helper so the
 * type-narrowing magic lives in one place, not repeated per test.
 */
function assertStoreEmitsValues(
  label: string,
  store: ReadWriteStore<CountState>,
): void {
  it(`works with ${label}`, () => {
    const values: number[] = [];
    // The lib's StoreApi only needs getState + subscribe, but zustand 3's
    // overloaded Subscribe type is incompatible at the type level.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stream$ = toStream(store as any, (s: CountState) => s.count, {
      fireImmediately: true,
    });
    const sub = stream$.subscribe((v) => values.push(v));
    expect(values).toEqual([0]);
    store.setState({ count: 1 });
    expect(values).toEqual([0, 1]);
    sub.unsubscribe();
  });
}

describe('multi-version zustand compatibility', () => {
  assertStoreEmitsValues(
    'zustand 5 (default)',
    createStore<CountState>()(() => ({ count: 0 })),
  );

  assertStoreEmitsValues(
    'zustand 4',
    createStore4<CountState>()(() => ({ count: 0 })),
  );

  assertStoreEmitsValues(
    'zustand 3',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createStore3<{ count: number }>(() => ({ count: 0 })) as any,
  );
});

describe('multi-version middleware compatibility', () => {
  it('toStream works with combine middleware (zustand 5)', () => {
    const store = createStore(
      combine({ bears: 0 }, () => ({
        increase: () => store.setState({ bears: store.getState().bears + 1 }),
      })),
    );

    const bears$ = toStream(store, (s) => s.bears, { fireImmediately: true });
    const values: number[] = [];
    const sub = bears$.subscribe((v) => values.push(v));
    expect(values).toEqual([0]);
    store.getState().increase();
    expect(values).toEqual([0, 1]);
    sub.unsubscribe();
  });
});
