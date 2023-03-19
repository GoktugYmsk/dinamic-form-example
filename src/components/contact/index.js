import React from 'react'

import { Field, Form, Formik } from 'formik'
import { Helmet } from 'react-helmet'

import File from '../form/File'
import Input from '../form/Input'
import './index.css'

function Contact() {
    return (
        <div className='container' >
            <Helmet>
                <title>İletişim</title>
                <meta name='description' content='iletişim description' />
            </Helmet>
            <Formik initialValues={{
                name: 'Tuğkan',
                about: '',
                gender: 1,
                avatar: '',
                accept: false,
                skills: [],
            }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ values }) => (
                    <Form>
                        <Input className='firtInput' label="Ad-Soyad" name="name" />
                        <Field component='textarea' className='textarea'  name="about" /> <br />
                        <label>
                            <Field type='checkbox' className='checkBox' name='accept' />
                            kuralları kabul ediyorum!
                        </label>
                        <Field component='select' className='optionBox' name='gender'>
                            <option value={1} >Kadın</option>
                            <option value={2} >Erkek</option>
                        </Field><br />
                        <Field component='select' name='skills' className='selectBox' multiple={true} >
                            <option value='php' >PHP</option>
                            <option value='html' >HTML</option>
                            <option value='css' >CSS</option>
                            <option value='js' >JS</option>
                            <option value='react' >REACT</option>
                        </Field>
                        <File label="Avatar" name="avatar" />
                        <button disabled={!values.accept} className='acceptButton' type='submit' >gönder</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Contact
