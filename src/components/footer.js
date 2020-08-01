import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const SiteFooter = styled.footer`
  ${tw`p-4 py-8 mt-8 text-lg leading-loose text-center bg-gray-100 lg:px-16 dark:bg-gray-800 dark:text-white`}
`

const Footer = ({ content }) => (
  <SiteFooter>
    <div dangerouslySetInnerHTML={{__html: content}} />
  </SiteFooter>
)

export default Footer
