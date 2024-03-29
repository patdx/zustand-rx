/* eslint-disable @typescript-eslint/ban-types */
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

// Based on here: https://github.com/pmndrs/zustand/blob/50a8677dba4acecc1e313dcb08d4cf2ac1ab918c/src/vanilla.ts#L8
// Inlined the type to fix issue:
// https://github.com/patdx/zustand-rx/issues/953
type StoreApi<T> = {
  getState: () => T;
  subscribe: (listener: (state: T, prevState: T) => void) => () => void;
};

export type StateValueOf<TStore> =
  TStore extends StoreApi<infer TState> ? TState : never;

/**
 * Create a zustand selector as an RxJS observable, inspired
 * by the MobX toStream API: https://github.com/mobxjs/mobx-utils#tostream
 */
export const toStream = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TStore extends StoreApi<any>,
  TState = StateValueOf<TStore>,
  TSlice = TState,
>(
  store: TStore,
  selector?: (value: TState) => TSlice,
  {
    equalityFn,
    fireImmediately,
  }: {
    equalityFn?: (previous: TSlice, current: TSlice) => boolean;
    fireImmediately?: boolean;
  } = {},
): Observable<TSlice> => {
  const state$ = new Observable<TState>((subscriber) => {
    if (fireImmediately) {
      subscriber.next(store.getState());
    }
    const unsubscribe = store.subscribe((state) => subscriber.next(state));
    return () => unsubscribe();
  });

  const mapped$: Observable<TSlice> = selector
    ? state$.pipe(map((state) => selector(state)))
    : (state$ as unknown as Observable<TSlice>);

  const deduped$ =
    selector || equalityFn
      ? mapped$.pipe(
          distinctUntilChanged((previous, current) => {
            if (equalityFn) {
              return equalityFn(previous, current);
            } else {
              return previous === current;
            }
          }),
        )
      : mapped$;

  return deduped$;
};
