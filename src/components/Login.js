import React from 'react'
import { Helmet } from 'react-helmet'
import { Form, useFormik, Field, Formik } from 'formik'

function Login() {

    return (
        <div>
            <Helmet>
                <title>Blog</title>
                <meta name='description' content='blog description' />
            </Helmet>
            Login page

            <Formik initialValues={{
                username: '',
                password: '',
                onSubmit: values => {

                }
            }} >
                <Form>
                    <Field name='username' /> <br />
                    <Field name='password' type="password " /> <br />
                    <button type='submit' >giriş yap</button>
                </Form>
            </Formik>

        </div>
    )
}

export default Login
