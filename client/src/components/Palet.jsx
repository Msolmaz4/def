import React from 'react'
import { useState } from 'react'

import { send } from '../SocketApi'

const Palet = () => {

    const [ color ,setColor] = useState('')
  return (
    <div>
        <input
         type="color"
         value={color}
         onChange={(e)=>setColor(e.target.value)} />
        <button
        onClick={()=>send(color)}
        >BASBABA</button>
       
    </div>
  )
}

export default Palet