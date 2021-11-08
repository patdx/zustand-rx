# zustand-rx

This is a tool to subscribe to a Zustand store as an RxJS observable.

## Install

```
npm install zustand zustand-rx
yarn add zustand zustand-rx
```

## Usage

```ts
import { toStream } from 'zustand-rx';
import { combine } from 'zustand/middleware';
import create from 'zustand/vanilla';

// NOTE: alternatively, the React version also seems to work:
// import create from 'zustand';

const store = create(
  combine({ bears: 0 }, (set) => ({
    increase: (by: number) => set((state) => ({ bears: state.bears + by })),
  }))
);

// type is Observable<number>
const bears$ = toStream(store, (state) => state.bears, {
  fireImmediately: true,
});
```

Using `fireImmediately` is similar to a BehaviorSubject. For UI integrations. fpr example, using Angular with AsyncPipe, you probably want to set `fireImmediately` to true.

You can also see
