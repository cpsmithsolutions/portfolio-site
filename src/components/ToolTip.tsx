"use client"
import {useEffect, useState} from "react"

const ToolTip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false)

    console.log({isVisible})

    return (
        <div className="tooltip-container" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
           {/* {isVisible && <div className="tooltip"> {text}</div>}  */}
     
        </div>
    )
}

export default ToolTip