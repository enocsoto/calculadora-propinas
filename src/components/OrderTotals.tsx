import { Dispatch, useMemo } from "react";
import formatCurrency from "../helpers";
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer";

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number,
  // placeOrder: () => void
  dispatch: Dispatch<OrderActions>
}
const OrderTotals = ({
  order,
  tip,
  // placeOrder
  dispatch
}: OrderTotalsProps) => {
  const subTotalAmount = useMemo(() =>
    order.reduce((totalAmount, amount) => totalAmount + (amount.quantity * amount.price), 0),
    [order]);

  const tipAmmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmmunt = useMemo(() => subTotalAmount + tipAmmount, [tip, order]);
  return (
    <div className="text-lg text-slate-600 text-right font-bold">

      <h2 className="max-w-3xl
          mt-4 
          mx-auto py-2 
          text-4xl font-semibold 
          text-slate-700"> Totales y Propinas:
      </h2>
      <p>Subtotal a pagar: {formatCurrency(subTotalAmount)}</p>
      <p>Propina: {''}
        <span className="font-bold">{formatCurrency(tipAmmount)}</span>
      </p>
      <p>Total a Pagar: {''}
        <span className="font-bold">{formatCurrency(totalAmmunt)}</span>
      </p>
      <button className="border-2 p-2 mt-4 rounded-md border-slate-600 bg-slate-700 text-white disabled:opacity-20"
        disabled={totalAmmunt === 0}
        // onClick={() => placeOrder()}
        onClick={() => dispatch({ type: 'place-order' })}
      >Guardar Orden</button>
    </div>
  )
}
export default OrderTotals