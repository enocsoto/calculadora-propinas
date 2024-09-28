import formatCurrency from "../helpers"
import type { OrderItem } from "../types"

type OrderItemsProps = {
  order: OrderItem[]
}

const OrderItems = ({ order }: OrderItemsProps) => {
  return (
    <>
      <div className="border-2
          border-slate-300
          rounded-md">
        {!order.length
          ? <p>Seleccionar Producto</p>
          :
          <>
            <div className="
          max-w-7xl mx-auto 
          text-center 
          text-xl 
          items-center
          border-b-2
          border-b-slate-200
          text-slate-700">
              <ul className="grid grid-cols-4 gap-x-5 text-center font-semibold pb-3 ">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
              </ul>
            </div>
            <div>
              {order.map(item => {
                return (
                  <div key={item.id} className="grid grid-cols-4 gap-x-5 text-center mb-4 items-center border-b-2 border-slate-200">
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                    <p>{item.quantity}</p>
                    <button className="bg-red-500 w-8 h-8 rounded-full text-white font-semibold">X</button>
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