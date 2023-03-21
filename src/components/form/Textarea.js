import { Field } from 'formik'
import { useField } from 'formik'
import React from 'react'
import { FiCheck } from "react-icons/fi"
import classNames from 'classnames'

function Textarea({ label, ...props }) {
  const [field, meta, helpers] = useField(props)
  return (
    <label>
        <textarea {...field} {...props } />
    </label>
  )
}

export default Textarea
