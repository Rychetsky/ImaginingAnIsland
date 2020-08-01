import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const SiteFooter = styled.footer`
  ${tw`p-4 py-8 mt-8 text-lg leading-loose text-center bg-gray-100 lg:px-16 dark:bg-gray-800 dark:text-white`}
`

const Footer = ({ content }) => (
  <SiteFooter>
    
    <p>
      Website built by <a href="https://rycode.com">Raphael Rychetsky</a> using <a href="https://gatsbyjs.org">Gatsby</a>, <a href="https://forestry.io">Forestry</a>, <a href="https://vercel.com">Vercel</a> and <a href="https://github.com/Rychetsky/ImaginingAnIsland">Github</a>. Design by <a href="https://rosalindblake.com">Rosalind Blake</a>.
    </p>
    
    <p>
      All images are copyright to their respective owners.
    </p>

    <p>
      North Uist, 2020
    </p>
    
  </SiteFooter>
)

export default Footer
