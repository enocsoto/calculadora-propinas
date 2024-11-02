import { Dispatch } from "react"
import formatCurrency from "../helpers"
import type { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type OrderItemsProps = {
  order: OrderItem[]
  // removeItem: (id: OrderItem['id']) => void
  dispatch: Dispatch<OrderActions>
}

const OrderItems = ({
  order,
  // removeItem,
  dispatch }: OrderItemsProps) => {
  return (
    <>
      <div className="border-2
          border-slate-300
          rounded-md">
        {
          <>
            <div className="
          max-w-7xl mx-auto 
          text-center 
          text-xl 
          items-center
          border-b-2
          border-b-slate-200
          text-slate-700">
              <ul className="grid grid-cols-5 gap-x-5 text-center font-semibold pb-3 ">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>SubTotal</li>
              </ul>
            </div>
            <div>
              {order.map(item => {
                return (
                  <div key={item.id} className="grid grid-cols-5 gap-x-5 text-center mb-4 items-center border-b-2 border-slate-200 py-2">
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                    <p>{item.quantity}</p>
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                    <button className="bg-red-500 w-8 h-8 rounded-full text-white font-semibold"
                      // onClick={() => removeItem(item.id)}>X</button>
                      onClick={() => dispatch({ type: 'remove-order', payload: { item: item.id } })}>X</button>
                  </div>
                )
              }
              )}
            </div>

          </>

        }

      </div>

    </>

  )

}
export default OrderItems