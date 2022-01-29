---
id: 'modules'
title: 'zustand-rx'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Type aliases

### StateValueOf

Ƭ **StateValueOf**<`TStore`\>: `TStore` extends `StoreApi`<infer TState\> ?
`TState` : `never`

#### Type parameters

| Name     |
| :------- |
| `TStore` |

#### Defined in

[index.ts:6](https://github.com/patdx/zustand-rx/blob/312d91d/libs/zustand-rx/src/index.ts#L6)

## Functions

### toStream

▸ `Const` **toStream**<`TStore`, `TState`, `TSlice`\>(`store`, `selector?`,
`__namedParameters?`): `Observable`<`TSlice`\>

Create a zustand selector as an RxJS observable, inspired by the MobX toStream
API: https://github.com/mobxjs/mobx-utils#tostream

#### Type parameters

| Name     | Type                                                              |
| :------- | :---------------------------------------------------------------- |
| `TStore` | extends `StoreApi`<`any`\>                                        |
| `TState` | extends `object`[`StateValueOf`](modules#statevalueof)<`TStore`\> |
| `TSlice` | `TState`                                                          |

#### Parameters

| Name                                 | Type                                                     |
| :----------------------------------- | :------------------------------------------------------- |
| `store`                              | `TStore`                                                 |
| `selector?`                          | (`value`: `TState`) => `TSlice`                          |
| `__namedParameters`                  | `Object`                                                 |
| `__namedParameters.fireImmediately?` | `boolean`                                                |
| `__namedParameters.equalityFn?`      | (`previous`: `TSlice`, `current`: `TSlice`) => `boolean` |

#### Returns

`Observable`<`TSlice`\>

#### Defined in

[index.ts:14](https://github.com/patdx/zustand-rx/blob/312d91d/libs/zustand-rx/src/index.ts#L14)
