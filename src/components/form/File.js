import React from 'react'
import { useField } from 'formik'

import {FiCheck} from "react-icons/fi"

function File({label, ...props}) {
    const [field,meta,helpers] = useField(props)
    
  async function fileOpen() {
    try{
    const [fileHandle] = await window.showOpenFilePicker()
    const file = await fileHandle.getFile()
    helpers.setValue(file)
    }
    catch (e) {
      helpers.setValue('')
    }
  }
    
  return (
    <div>
      <div>
        <div>{label} </div>
        <button onClick={fileOpen} type='button' >
          {field.value && <> 'Dosya Seçildi' <FiCheck size='15' /></>}
          {!field.value && 'Dosya Seç'}
        </button>
        {field.value && <button onClick={() => helpers.setValue('')} >Dosyayı kaldır</button>}
      </div>
    </div>
  )
}

export default File
