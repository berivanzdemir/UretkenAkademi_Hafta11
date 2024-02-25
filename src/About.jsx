import { useReducer } from "react";
import { DECREMENT, INCREMENT, RESET, countReducer, initialCountState } from "./reducer/counter";






export default function About(){
    const[count,dispatch]=useReducer(countReducer,initialCountState)

return <div>
    <h2>Hakkında Sayfası:Context API Kullanılmadı</h2>
    <h2>sayaç:::{count}</h2>
    <button onClick={()=>dispatch(INCREMENT)}>Arttır</button>
<button onClick={()=>dispatch(DECREMENT)}>Azalt</button>
<button onClick={()=>dispatch(RESET)}>Sıfırla</button>
<button onClick={()=>dispatch("Olmayan")}>Olmayan</button>
</div>


}