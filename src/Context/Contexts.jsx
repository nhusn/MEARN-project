import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const isCustomerLoggedInContext = createContext()
export const isShopLoggedContext = createContext()

function Contexts({children}) {
    const [isCustomerLogged,setIsCustomerLogged] = useState(false);
    const [isShopLogged,setIsShopLogged] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsCustomerLogged(true)
        }else if(sessionStorage.getItem("shopUser")){
          setIsShopLogged(true)
        }
    })
  return (
    <>
     <isShopLoggedContext.Provider value={{isShopLogged,setIsShopLogged}}>
       <isCustomerLoggedInContext.Provider value={{isCustomerLogged,setIsCustomerLogged}}>
          {children}
       </isCustomerLoggedInContext.Provider>
     </isShopLoggedContext.Provider>
    </>
  )
}

export default Contexts