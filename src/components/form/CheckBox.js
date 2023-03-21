import { Field } from 'formik'
import { useField } from 'formik'
import React from 'react'
import { FiCheck } from "react-icons/fi"
import classNames from 'classnames'

function CheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props)
  return (
    <label>
      <div>{label} </div>
      <button  className='' onClick={()=>{helpers.setValue(!field.value)}} >
        <FiCheck/>
      </button>
      {label}
    </label>
  )
}

export default CheckBox
