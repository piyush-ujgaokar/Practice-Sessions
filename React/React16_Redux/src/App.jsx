import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

const App = () => {

  let {count}=useSelector((store)=>store.counter)
  let dispatch=useDispatch()


  return (
    <div className='text-5xl'>
      <h1>Count is :- {count}</h1>

      <button className="p-2 bg-gray-700 rounded-2xl mt-10 cursor-pointer" onClick={()=>dispatch(increment())}>Increment</button>
      <button className="p-2 bg-gray-700 rounded-2xl mt-10 cursor-pointer" onClick={()=>dispatch(decrement())}>Decrement</button>


    </div>
  );
}

export default App;
