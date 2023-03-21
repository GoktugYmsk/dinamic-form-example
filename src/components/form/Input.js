import React from 'react'

import { useField } from 'formik'

function Input({label, ...props}) {
    const [field,meta,helpers] = useField(props)
  return (
    <div>
      <label className='label' >
        <div>{label} </div>
        <input {...field} {...props} />
      </label>
    </div>
  )
}

export default Input
