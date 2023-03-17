import { Field } from 'formik'
import { useField } from 'formik'
import React from 'react'
import {FiCheck} from "react-icons/all"

function CheckBox({label, ...props}) {
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

export default CheckBox
