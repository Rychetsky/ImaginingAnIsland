import React, { Component } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import tw from 'twin.macro'

import { graphql, StaticQuery } from 'gatsby'

const SiteTitle = styled.h1`
  ${tw`block mb-2 font-serif text-3xl italic font-bold text-blue-600 md:text-3xl dark:text-white`}
`

const Navigation = styled.nav`

  & li {
    ${tw`inline-block pr-4`}
  }

  & .active {
    ${tw`border-b-2 border-blue-600 dark:border-gray-300`}
  }
`

class Navbar extends Component {
  render() {
    return (
      <Navigation
        role="navigation"
        aria-label="main navigation"
      >

        <SiteTitle>
          <AniLink fade to="/">
            {this.props.siteTitle}
          </AniLink>
        </SiteTitle>

        <ul>
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
                  <li key={edge.node.id}>
                    <AniLink fade
                      activeClassName="active"
                      to={edge.node.url}
                    >
                      {edge.node.title}
                    </AniLink>
                  </li>
                  ) : (
                    <li key={edge.node.id}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.node.url}
                    >
                      {edge.node.title}
                    </a>
                  </li>
                )
              })
            }
          />
        </ul>
      </Navigation>
    )
  }
}

export default Navbar
