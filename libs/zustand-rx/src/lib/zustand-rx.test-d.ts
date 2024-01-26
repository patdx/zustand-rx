import { create } from 'zustand';
import { toStream } from './zustand-rx';
import { immer } from 'zustand/middleware/immer';
import type { Observable } from 'rxjs';

type State = {
  bears: number;
};

test('types', () => {
  test('Should work with immer middleware', () => {
    // https://github.com/patdx/zustand-rx/issues/953
    const store = create<State>()(
      immer(() => ({
        bears: 0,
      })),
    );

    const store$ = toStream(store, (state) => {
      expectTypeOf(state).toEqualTypeOf<State>();
      return state;
    });

    expectTypeOf(store$).toEqualTypeOf<Observable<State>>();
  });
});
