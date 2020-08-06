import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import tw from 'twin.macro'

import Layout from '../components/layout'

const Article = styled.article`
  ${tw`max-w-4xl py-8 md:py-12`}
`

const Headline = styled.h1`
  ${tw`mb-8 text-xl font-medium text-blue-600 md:text-2xl lg:text-3xl dark:text-gray-200`}

  & em {
    ${tw`italic tracking-wide`}
  }
`

const BodyText = styled.main`
  ${tw`text-lg leading-relaxed`}

  & h2 {
    ${tw`mb-2 text-lg font-medium`}
  }

  & h3 {
    ${tw`mb-2 text-lg`}
  }

  & p {
    ${tw`mb-6`}
  }

  & a {
    ${tw`font-medium border-b border-blue-600 dark:border-gray-500 hover:text-blue-600 dark:hover:text-gray-500 `}
  }

  & strong {
    ${tw`font-medium`}
  }

  & em {
    ${tw`italic tracking-wide`}
  }

  & img {
    ${tw`inline-block h-12 my-4 mr-4 md:h-20`}
  }
`

class SingleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Article>
          <header>
            <Headline>{post.frontmatter.title}</Headline>
            {post.frontmatter.date && (
              <em className="is-size-6 has-text-grey">
                {post.frontmatter.date}
              </em>
            )}
          </header>
          <BodyText>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </BodyText>
        </Article>
      </Layout>
    )
  }
}

export default SingleTemplate

export const pageQuery = graphql`
  query SinglePageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
