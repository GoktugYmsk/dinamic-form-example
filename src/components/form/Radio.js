import { useField } from 'formik'
import React from 'react'
import { FiCheck } from "react-icons/fi"

function Radio({ label, options, ...props }) {
    const [field, meta, helpers] = useField(props)
    return options.map((option, key) => (
        <label key={key}>
            <div>{label} </div>
            <button type='button' onClick={() => helpers.setValue(option.key)} >

            </button>
            {option.value}
        </label>
    ))
}

export default Radio
