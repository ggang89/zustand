import './App.css'
import { IcreaseButton, RemoveButton } from "./button";
import { useBearStore } from './use-bear'

function App() {
  const bears = useBearStore((state) => state.bears);
  return (
    <div className="">
      <RemoveButton />
      {bears}
      <IcreaseButton />
    </div>
  );
}

export default App
