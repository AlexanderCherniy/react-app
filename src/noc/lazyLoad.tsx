import React, { ComponentType } from 'react'
type LazyLoaderHOCType = {}
export const LazyLoaderHOC = (Component:ComponentType)=>{
    return (props:LazyLoaderHOCType)=>{
        return(
            <React.Suspense fallback={<div>Загрузка...</div>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}