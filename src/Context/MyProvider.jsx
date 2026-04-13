'use client'
import React, { createContext, useState } from 'react';

export const MyContext = createContext() ;

const MyProvider = ({children}) => {

    const [data , setData ] = useState([])

    return (
       <MyContext.Provider value={{data,setData}}>
        {children}
       </MyContext.Provider>
    );
};

export default MyProvider;