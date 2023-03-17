import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Helmet } from 'react-helmet'
import File from './form/File'
import Input from './form/Input'

function Contact() {
    return (
        <div>
            <Helmet>
                <title>İletişim</title>
                <meta name='description' content='iletişim description' />
            </Helmet>
            İletişim
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
                        <Input label="Ad-Soyad" name="name" />
                        <Field component='textarea' name="about" /> <br />
                        <label>
                            <Field type='checkbox' name='accept' />
                            kuralları kabul ediyorum!
                        </label>
                        <Field component='select' name='gender'>
                            <option value={1} >Kadın</option>
                            <option value={2} >Erkek</option>
                        </Field><br/>
                        <Field component='select' name='skills' multiple={true} >
                            <option value='php' >PHP</option>
                            <option value='html' >HTML</option>
                            <option value='css' >CSS</option>
                            <option value='js' >JS</option>
                            <option value='react' >REACT</option>
                        </Field>
                        <File label="Avatar" name="avatar" />
                        <button disabled={!values.accept} type='submit' >gönder</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Contact
