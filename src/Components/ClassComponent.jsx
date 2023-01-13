import React from 'react'

const ClassComponent = () => {
  return (
    <div className='components c'>
         <div className='comps'>
            <h1 style={{textAlign: 'center'}}>This is Created using Functional Component</h1>
            <p className='p2'>This is done using External CSS</p>
            <p style={{textAlign: 'center', color: 'red'}}>THis is done using Inline CSS</p>
        </div>
    </div>
  )
}

export default ClassComponent