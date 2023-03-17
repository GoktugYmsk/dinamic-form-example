import React from 'react'
import { Helmet } from 'react-helmet'

function Home() {
    return (
        <div>
            <Helmet>
                <title>Anasayfa</title>
                <meta name='description' content='anasayfa description' />
            </Helmet>
            Anasayfa
        </div>
    )
}

export default Home
