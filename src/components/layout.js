import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from "styled-components"
import tw from 'twin.macro'

import Header from './header'
import Footer from './footer'
import '../css/main.css'

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`bg-white dark:bg-gray-900 dark:text-white`}
  }

  a {
    ${tw`transition-colors duration-200 ease-in-out`}
  }
`

const Wrapper = styled.div`
  ${tw`px-4 mx-auto bg-white lg:px-16 dark:bg-gray-900`}
  max-width: 1920px;
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
            description
            image
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: `${data.site.siteMetadata.description}` },
            { name: 'author', content: `${data.site.siteMetadata.author}` },
            { name: 'image', content: `${data.site.siteMetadata.image}` },
            { name: 'og:image', content: `${data.site.siteMetadata.image}` },
            { name: 'og:description', content: `${data.site.siteMetadata.description}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle />
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </Wrapper>
        <Footer content={data.site.siteMetadata.footer} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
