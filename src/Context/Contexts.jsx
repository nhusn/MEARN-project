import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const isCustomerLoggedInContext = createContext()

function Contexts({children}) {
    const [isCustomerLogged,setIsCustomerLogged] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsCustomerLogged(true)
        }
    })
  return (
    <>
     <isCustomerLoggedInContext.Provider value={{isCustomerLogged,setIsCustomerLogged}}>
        {children}
     </isCustomerLoggedInContext.Provider>
    </>
  )
}

export default Contexts