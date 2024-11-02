import { MenuItems, OrderItem } from "../types";

export type OrderActions =
  { type: 'add-order', payload: { item: MenuItems } } |
  { type: 'remove-order', payload: { item: MenuItems['id'] } } |
  { type: 'place-order' } |
  { type: 'add-tip', payload: { value: number } }

export type OrderState = {
  order: OrderItem[],
  tip: number,
}

export const InitialState: OrderState = {
  order: [],
  tip: 0,
}

export const OrderReducer = (state: OrderState, action: OrderActions) => {

  if (action.type === 'add-order') {
    const itemExist = state.order.find(({ id }) => id === action.payload.item.id);
    let updatedOrder: OrderItem[] = [];
    if (itemExist) {
      updatedOrder = state.order.map(orderItem =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
    } else {
      const prevItem: OrderItem = { ...action.payload.item, quantity: 1 }
      updatedOrder = [...state.order, prevItem]
    }
    return {
      ...state,
      order: updatedOrder,
    }
  }

  if (action.type === 'remove-order') {
    const removeOrder = state.order.filter((item) => item.id !== action.payload.item)
    return {
      ...state,
      order: removeOrder,
    }
  }

  if (action.type === 'place-order') {
    const state = InitialState
    return {
      ...state,
    }
  }

  if (action.type === 'add-tip') {
    return {
      ...state,
      tip: action.payload.value,
    }
  }

  return state
}