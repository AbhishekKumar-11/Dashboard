import { classNames } from '@syncfusion/ej2/lists'
import React from 'react'

const Button = ({  color,bgcolor, size ,text,borderRadius}) => {
  return (
     <button 
     type='button'
     style={{ 
      backgroundColor : bgcolor 
      , color 
      , borderRadius,
         }}
         className={`text-${size} p-3 hover:drop-shadow-xl`}
         >
     {text}
     </button>
  )
}

export default Button