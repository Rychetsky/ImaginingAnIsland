import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

import Navbar from './navbar'

const StyledHeader = styled.header`
  ${tw`p-4 lg:px-16`}
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <section className="navigation">
      <Navbar siteTitle={siteTitle} />
    </section>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
