---
id: 'modules'
title: 'zustand-rx'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Type Aliases

### StateValueOf

Ƭ **StateValueOf**<`TStore`\>: `TStore` extends `StoreApi`<infer TState\> ?
`TState` : `never`

#### Type parameters

| Name     |
| :------- |
| `TStore` |

#### Defined in

[lib/zustand-rx.ts:6](https://github.com/patdx/zustand-rx/blob/d9ea0ba/libs/zustand-rx/src/lib/zustand-rx.ts#L6)

## Functions

### toStream

▸ **toStream**<`TStore`, `TState`, `TSlice`\>(`store`, `selector?`,
`__namedParameters?`): `Observable`<`TSlice`\>

Create a zustand selector as an RxJS observable, inspired by the MobX toStream
API: https://github.com/mobxjs/mobx-utils#tostream

#### Type parameters

| Name     | Type                                                                    |
| :------- | :---------------------------------------------------------------------- |
| `TStore` | extends `StoreApi`<`any`, `TStore`\>                                    |
| `TState` | extends `object` = [`StateValueOf`](modules.md#statevalueof)<`TStore`\> |
| `TSlice` | `TState`                                                                |

#### Parameters

| Name                                 | Type                                                     |
| :----------------------------------- | :------------------------------------------------------- |
| `store`                              | `TStore`                                                 |
| `selector?`                          | (`value`: `TState`) => `TSlice`                          |
| `__namedParameters`                  | `Object`                                                 |
| `__namedParameters.equalityFn?`      | (`previous`: `TSlice`, `current`: `TSlice`) => `boolean` |
| `__namedParameters.fireImmediately?` | `boolean`                                                |

#### Returns

`Observable`<`TSlice`\>

#### Defined in

[lib/zustand-rx.ts:14](https://github.com/patdx/zustand-rx/blob/d9ea0ba/libs/zustand-rx/src/lib/zustand-rx.ts#L14)
