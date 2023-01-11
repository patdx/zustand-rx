[zustand-rx](introduction.md) / Exports

# zustand-rx

## Table of contents

### Type Aliases

- [StateValueOf](modules.md#statevalueof)

### Functions

- [toStream](modules.md#tostream)

## Type Aliases

### StateValueOf

Ƭ **StateValueOf**<`TStore`\>: `TStore` extends `StoreApi`<infer TState\> ?
`TState` : `never`

#### Type parameters

| Name     |
| :------- |
| `TStore` |

#### Defined in

[lib/zustand-rx.ts:6](https://github.com/patdx/zustand-rx/blob/eaebad4/libs/zustand-rx/src/lib/zustand-rx.ts#L6)

## Functions

### toStream

▸ **toStream**<`TStore`, `TState`, `TSlice`\>(`store`, `selector?`,
`«destructured»?`): `Observable`<`TSlice`\>

Create a zustand selector as an RxJS observable, inspired by the MobX toStream
API: https://github.com/mobxjs/mobx-utils#tostream

#### Type parameters

| Name     | Type                                                                    |
| :------- | :---------------------------------------------------------------------- |
| `TStore` | extends `StoreApi`<`any`, `TStore`\>                                    |
| `TState` | extends `object` = [`StateValueOf`](modules.md#statevalueof)<`TStore`\> |
| `TSlice` | `TState`                                                                |

#### Parameters

| Name                 | Type                                                     |
| :------------------- | :------------------------------------------------------- |
| `store`              | `TStore`                                                 |
| `selector?`          | (`value`: `TState`) => `TSlice`                          |
| `«destructured»`     | `Object`                                                 |
| › `equalityFn?`      | (`previous`: `TSlice`, `current`: `TSlice`) => `boolean` |
| › `fireImmediately?` | `boolean`                                                |

#### Returns

`Observable`<`TSlice`\>

#### Defined in

[lib/zustand-rx.ts:14](https://github.com/patdx/zustand-rx/blob/eaebad4/libs/zustand-rx/src/lib/zustand-rx.ts#L14)
