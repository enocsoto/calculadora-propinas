import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.10,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.20,
    label: '20%',
  },
  {
    id: 'tip-30',
    value: 0.30,
    label: '30%',
  }
]

type TipPercentageFormProps = {
  // setTip: React.Dispatch<React.SetStateAction<number>>;
  dispatch: Dispatch<OrderActions>;
  tip: number;

}
const TipPercentageForm = ({
  // setTip,
  dispatch,
  tip
}: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-semibold text-slate-800 text-2xl">Propina:
      </h3>
      <form action="">{tipOptions.map(tipOption => (
        <div key={tipOption.id} className="flex gap-2 text-right text-2xl font-semibold text-slate-600">
          <label htmlFor={tipOption.id}>{tipOption.label}</label>
          <input
            className=""
            type="radio"
            name="tip"
            value={tipOption.value}
            id={tipOption.id}
            // onChange={e => setTip(+e.target.value)}
            onChange={e => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })}
            checked={tip === tipOption.value}
          />
        </div>
      ))}</form>
    </div>
  )
}
export default TipPercentageForm