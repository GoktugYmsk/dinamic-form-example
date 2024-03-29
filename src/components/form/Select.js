import React from 'react'

import { useField } from 'formik'

function Select({ label, options, ...props }) {
    const [field, meta, helpers] = useField(props)
    return (
        <label className='label' >
            <div>{label} </div>
            <select {...field} {...props}>
                {options.map((option, key) => (
                    <option value={option.key} key={key} >{option.value}</option>
                ))}
            </select>
        </label>
    )
}

export default Select
