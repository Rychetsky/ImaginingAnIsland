import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from "styled-components"
import tw from 'twin.macro'

import Header from './header'
import Footer from './footer'
import '../css/main.css'

import favicon from './favicon.png'

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`bg-white dark:bg-gray-900 dark:text-white`}
  }
`

const Wrapper = styled.div`
  ${tw``}
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
