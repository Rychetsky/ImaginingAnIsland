import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const SiteFooter = styled.footer`
  ${tw`p-4 py-8 mt-8 leading-loose text-center bg-gray-100 lg:px-16 dark:bg-gray-800 dark:text-white`}

  & a {
    ${tw`font-medium hover:text-blue-600 dark:hover:text-gray-500 `}
  }
`

const BackToTop = styled.a`
  ${tw`block font-medium text-center hover:text-blue-600 dark:hover:text-gray-500`}
`

const Hashtag = styled.a`
  ${tw`inline-block mt-6 text-xl font-medium text-center text-blue-600 dark:text-white`}
`

const Footer = ({ content }) => (
  <div>
    <BackToTop href="#top">Back to top</BackToTop>
    <SiteFooter>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <Hashtag href="https://instagram.com/tags/ImaginingAnIsland" target="_blank" rel="noopener noreferrer">#ImaginingAnIsland</Hashtag>
    </SiteFooter>
  </div>
)

export default Footer
