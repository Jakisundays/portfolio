import React, { createContext, useContext, useState } from 'react'
import info from './Info'
//Creates Context
const userContext = createContext();

//export function to useContext in other components
export const useUserContext = () => useContext(userContext);

const UserProvider = ({children}) => { 
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}



export default UserProvider
