import React from 'react'

import { useField } from 'formik'

function Radio({ label, options, ...props }) {
    const [field, meta, helpers] = useField(props)
    return options.map((option, key) => (
        <label key={key}>
            <div>{label} </div>
            <button type='button' onClick={() => helpers.setValue(option.key)} />
            {option.value}
        </label>
    ))
}

export default Radio
