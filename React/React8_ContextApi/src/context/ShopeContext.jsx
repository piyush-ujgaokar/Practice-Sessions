import { useState } from "react";
import { createContext } from "react";

export const MyShope=createContext()

const ShopeContext=({children})=>{

        const [toggle, setToggle] = useState(false)
        const [cartData, setCartData] = useState([])


    return <MyShope.Provider value={{toggle,setToggle,cartData,setCartData}}>
        {children}
    </MyShope.Provider>
}

export default ShopeContext