import React from 'react'

import { Field, Form, Formik } from 'formik'
import { Helmet } from 'react-helmet'

import File from '../form/File'
import Input from '../form/Input'
import CheckBox from '../form/CheckBox'
import Textarea from '../form/Textarea'
import Select from '../form/Select'
import Radio from '../form/Radio'
import './index.css'

function Contact() {
    return (
        <div className='container' >
            <div className='altbox' > 
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
                    level: 'sr',
                }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    {({ values }) => (
                        <Form>
                            <Input className='firstInput' label="Ad-Soyad" name="name" />
                            <Textarea label='Hakkında' name='about' /> <br />
                            <CheckBox label="kuralları kabul ediyorum!" name='accept' />
                            <Select label='Cinsiyet' name='gender' original={true} options={[
                                { key: '1', value: 'Kadın' },
                                { key: '2', value: 'Erkek' }
                            ]} />
                            <option value={1} >Kadın</option>
                            <option value={2} >Erkek</option> <br />
                            <Field component='select' name='skills' className='selectBox' multiple={true} >
                                <option value='php' >PHP</option>
                                <option value='html' >HTML</option>
                                <option value='css' >CSS</option>
                                <option value='js' >JS</option>
                                <option value='react' >REACT</option>
                            </Field>
                            <File label="Avatar" name="avatar" />
                            <Radio className='radio' name='level' label="Seviyenizi Seçin" options={[
                                { key: 'jr', value: 'Jr.Developper' },
                                { key: 'Sr', value: 'Sr.Developper' },
                                { key: 'ninja', value: 'Ninja' }
                            ]} />
                            <button disabled={!values.accept} className='acceptButton' type='submit' >Gönder</button>
                            <pre>{JSON.stringify(values)}</pre>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Contact
