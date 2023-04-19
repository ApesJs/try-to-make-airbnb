import clsx from "clsx";
import React from "react";

export default function Container2({children, className}){
    return(
        <div className={clsx('max-w-screen-xxl mx-20', className)}>{ children }</div>
    )
}