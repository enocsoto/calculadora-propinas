import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItems) => {

    const itemExist = order.find(({ id }) => id === item.id);
    if (itemExist) {
      const updatedOrder = order.map(orderItem =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(updatedOrder)
    } else {
      const prevItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, prevItem])
    }
  }

  const removeItem = (id: MenuItems['id']) => {
    const updateItem = order.filter((item) => item.id !== id);
    setOrder(updateItem)
  }

  // const incrementQuantity = (id: MenuItems['id']) => {
  //   const updatedOrder = order.map(orderItem =>
  //     orderItem.id === id
  //       ? { ...orderItem, quantity: orderItem.quantity + 1 }
  //       : orderItem
  //   )
  //   setOrder(updatedOrder)
  // }
  return {
    order,
    addItem,
    removeItem
  }
}
export default useOrder