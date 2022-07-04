import React, { JSXElementConstructor } from 'react'
type LazyLoaderHOCType = {}
export const LazyLoaderHOC = (Component:JSXElementConstructor<any>)=>{
    return (props:LazyLoaderHOCType)=>{
        return(
            <React.Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}