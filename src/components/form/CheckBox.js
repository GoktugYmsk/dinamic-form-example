import React from 'react'

import { useField } from 'formik'
import { FiCheck } from "react-icons/fi"


function CheckBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props)
  return (
    <label>
      <div>{label} </div>
      <button onClick={() => { helpers.setValue(!field.value) }} >
        <FiCheck />
      </button>
      {label}
    </label>
  )
}

export default CheckBox
