import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItems";
import useOrder from "./hooks/useOrder";
import OrderItems from "./components/OrderItems";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";


function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()
  return (
    <>
      <header className="">
        <h1 className="text-center text-4xl from-neutral-300 text-slate-50  bg-slate-700 py-5">Calculadora de Propinas y Consumos</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 space-x-5">
        <div>
          <h2 className="max-w-3xl mx-auto py-2 text-center text-4xl font-semibold text-slate-700">Menu</h2>
          {menuItems.map((item) => {
            return <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          })}
        </div>
        <div >
          <h2 className="
          max-w-3xl 
          mx-auto py-2 
          text-left 
          text-4xl font-semibold 
          text-slate-700
          ">Consumo</h2>
          {
            order.length > 0 ? (
              <>
                <OrderItems
                  order={order}
                  removeItem={removeItem}
                />


                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}

                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (<p className=" text-3xl text-slate-500 font-semibold mt-4">Seleccione un producto del Menu</p>)
          }
        </div>
      </main>
    </>
  )
}

export default App
