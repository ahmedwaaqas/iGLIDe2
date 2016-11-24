import React from 'react'

import { PageTemplate, Header, Footer,LoginBox } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />}  footer={<Footer />} >
        <LoginBox/>
    </PageTemplate>
  )
}

export default HomePage
