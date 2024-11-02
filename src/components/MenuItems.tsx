import { Dispatch } from "react"
import formatCurrency from "../helpers"
import { MenuItems } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuProps = {
  item: MenuItems
  dispatch: Dispatch<OrderActions>
  // addItem: (item: MenuItems) => void
}

export const MenuItem = ({
  item,
  // addItem
  dispatch
}: MenuProps) => {
  const { name, price } = item
  return (
    <>
      <button className="flex justify-between 
      w-full border-2 
      p-3 border-slate-200 
      rounded-md m-2
      font-sans
      text-center
       text-sky-900 text-lg
      hover:text-slate-50 
      hover:bg-slate-700
      "
        // onClick={() => addItem(item)}>
        onClick={() => dispatch({ type: 'add-order', payload: { item } })}>

        <p className="">{name}</p>
        <p className="font-black">{formatCurrency(price)}</p>

      </button>
    </>

  )
}