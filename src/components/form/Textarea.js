import React from 'react'

import { useField } from 'formik'

function Textarea({ label, ...props }) {
    const [field, meta, helpers] = useField(props)
    return (
        <label>
            <textarea {...field} {...props} />
        </label>
    )
}

export default Textarea
