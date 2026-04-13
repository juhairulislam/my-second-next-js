'use client'
import React, { createContext, useState } from 'react';

export const MyContext = createContext() ;

const MyProvider = ({children}) => {

    const [data , setData ] = useState('This is data value')

    return (
       <MyContext.Provider value={{data,setData}}>
        {children}
       </MyContext.Provider>
    );
};

export default MyProvider;