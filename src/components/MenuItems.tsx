import formatCurrency from "../helpers"
import { MenuItems } from "../types"

type MenuProps = {
  item: MenuItems
  addItem: (item: MenuItems) => void
}

export const MenuItem = ({ item, addItem }: MenuProps) => {
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
        onClick={() => addItem(item)}>

        <p className="">{name}</p>
        <p className="font-black">{formatCurrency(price)}</p>

      </button>
    </>

  )
}