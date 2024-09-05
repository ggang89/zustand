import { useBearStore } from "./use-bear";

export function IcreaseButton() { 
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <button onClick={increasePopulation}>증가</button>
  )
}

export function RemoveButton() {
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <button onClick={removeAllBears}>reset</button>
  )
}