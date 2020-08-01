import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import tw from 'twin.macro'

import { graphql, StaticQuery } from 'gatsby'

const SiteTitle = styled.h1`
  ${tw`block mb-2 font-serif text-3xl italic font-bold text-blue-600 md:text-3xl dark:text-white`}
`

const NavItem = styled.span`
  ${tw`mr-4 text-lg`}
`

class Navbar extends Component {
  render() {
    return (
      <nav
        role="navigation"
        aria-label="main navigation"
      >

        <SiteTitle>
          <AniLink fade to="/">
            {this.props.siteTitle}
          </AniLink>
        </SiteTitle>

        <div>
          <div>
            <StaticQuery
              query={graphql`
                {
                  allMainMenuJson {
                    edges {
                      node {
                        id
                        type
                        url
                        title
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allMainMenuJson.edges.map(edge => {
                  return edge.node.type === 'internal' ? (
                    <AniLink fade
                      key={edge.node.id}
                      to={edge.node.url}
                      className="navbar-item"
                    >
                      <NavItem>
                        {edge.node.title}
                      </NavItem>
                    </AniLink>
                  ) : (
                    <a
                      key={edge.node.id}
                      className="navbar-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.node.url}
                    >
                      <NavItem>
                        {edge.node.title}
                      </NavItem>
                    </a>
                  )
                })
              }
            />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
