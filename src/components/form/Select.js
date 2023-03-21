import { Field } from 'formik'
import { useField } from 'formik'
import React from 'react'

function Select({label, options, ...props}) {
    const [field,meta,helpers] = useField(props)
  return (
      <label className='label' >
        <div>{label} </div>
        <select {...field} {...props}>
            {options.map((option,key)=>(
                <option value={option.key} key={key} >{option.value}</option>
            ))}
        </select>
      </label>
  )
}

export default Select
