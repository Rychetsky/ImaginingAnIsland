import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import CTA from '../components/blocks/cta'
import Hero from '../components/blocks/hero'
import Cluster from '../components/blocks/cluster'

class BlocksTemplate extends React.Component {
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
        {post.frontmatter.blocks.map((block, i) => {
            switch (block.component) {
              case '3col':
                return <ThreeCol block={block} key={i} />
              case 'feature':
                return <Feature block={block} key={i} />
              case 'cta':
                return <CTA block={block} key={i} />
              case 'hero':
                return <Hero block={block} key={i} />
              case 'cluster':
                return <Cluster block={block} key={i} />
              default:
                return ''
            }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
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
        blocks {
          component
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                srcSet
                ...GatsbyImageSharpFluid_tracedSVG
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          title
          name
          subtitle
          content
          orientation
          background
          button {
            url
            text
          }
          col1 {
            title
            content
          }
          col2 {
            title
            content
          }
          col3 {
            title
            content
          }
          gallery {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
