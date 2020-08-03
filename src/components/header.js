import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

import Navbar from './navbar'

const StyledHeader = styled.header`
  ${tw`pt-4 pb-8 lg:pt-8`}
`

const Header = ({ siteTitle }) => (
  <StyledHeader id="top">
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
