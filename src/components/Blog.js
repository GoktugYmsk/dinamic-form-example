import React from 'react'
import { Helmet } from 'react-helmet'

function Blog() {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
                <meta name='description' content='blog description' />
            </Helmet>
            Blog
        </div>
    )
}

export default Blog
