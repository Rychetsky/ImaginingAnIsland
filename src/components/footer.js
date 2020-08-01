import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const SiteFooter = styled.footer`
  ${tw`p-4 py-8 mt-8 leading-loose text-center bg-gray-100 lg:px-16 dark:bg-gray-800 dark:text-white`}

  & a {
    ${tw`font-medium hover:text-blue-600 dark:hover:text-gray-500 `}
  }
`

const Footer = ({ content }) => (
  <SiteFooter>
    <div dangerouslySetInnerHTML={{__html: content}} />
  </SiteFooter>
)

export default Footer
