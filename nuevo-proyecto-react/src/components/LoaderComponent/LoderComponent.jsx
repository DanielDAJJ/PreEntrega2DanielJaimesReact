import React from 'react'
import { bouncy } from 'ldrs'
import './LoderComponent.css'

const LoderComponent = () => {
    bouncy.register()
    return (
        <div className='loaderScreen'>
            <l-bouncy size="80" speed="1.5" color="white"></l-bouncy>
        </div>
  )
}

export default LoderComponent