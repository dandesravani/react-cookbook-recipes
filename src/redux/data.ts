/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { CartItem } from './Cart'

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export interface Product {
  productId: string
  name: string
  description: string
  price: number
}

export const products: Product[] = [
  {
    productId: 'BE8290004',
    name: 'Ski boots',
    description: 'Mondo 26.5. White.',
    price: 698.62,
  },
  {
    productId: 'PC6310098',
    name: 'Snowboard boots',
    description: 'Mondo 27.5. Blue.',
    price: 825.59,
  },
  {
    productId: 'RR5430103',
    name: 'Mountaineering boots',
    description: 'Mondo 27.3. Brown.',
    price: 634.98,
  },
]

export interface InitialCart {
  items: CartItem[] | []
}

const initialCart: InitialCart = { items: [] }

export function replaceAt<T>(
  arr: readonly T[],
  idx: number,
  item: T,
): readonly T[] {
  return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)]
}

export const reducer = (state: any = { items: [] }, action: any = {}) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.items.length === 0) {
        const newItem = { ...action.payload, quantity: 1 }
        const newList = [...state.items, newItem]
        return { items: newList }
      } else {
        const prodIdx = state.items.findIndex(
          it => it.productId === action.payload.productId,
        )
        if (prodIdx === -1) {
          const newItem = { ...action.payload, quantity: 1 }
          return { items: [...state.items, newItem] }
        } else {
          const found = state.items[prodIdx]
          const newItem = {
            ...found,
            quantity: found.quantity + 1,
          }
          const newList = replaceAt(state.items, prodIdx, newItem)
          return { items: newList }
        }
      }
    case 'CLEAR':
      return initialCart
    default:
      return state
  }
}
