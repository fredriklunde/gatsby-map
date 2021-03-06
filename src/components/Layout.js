import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'assets/stylesheets/application.scss'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({ children, pageName }) => {
  let className = ''

  if (pageName) {
    className = `${className} page-${pageName}`
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Coronaviruset COVID-19 i Sverige - Karta</title>
      </Helmet>
      <Header />
      <div className="wrapper">
        <main>{children}</main>
      </div>
      {pageName == 'home' ? null : <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string
}

export default Layout
