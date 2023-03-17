import { Field } from 'formik'
import { useField } from 'formik'
import React from 'react'

function Input({label, ...props}) {
    const [field,meta,helpers] = useField(props)
  return (
    <div>
      <label>
        <div>{label} </div>
        <input {...field} {...props} />
      </label>
    </div>
  )
}

export default Input
