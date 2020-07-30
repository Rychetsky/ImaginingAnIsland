import React from 'react'
import Img from "gatsby-image/withIEPolyfill"
import styled, { css } from "styled-components"
import tw from 'twin.macro'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Name = styled.h2`
  ${tw`mx-2 mb-4 text-lg`}
`

const Website = styled.a`
  ${tw`text-blue-600`}
`

const ClusterSection = styled.section`
  ${tw`w-full`}
`

const GalleryInner = styled.ul`
  ${tw`flex flex-wrap items-center justify-center w-full`}
`

const Gallery = styled.div`
  ${tw`flex flex-col w-auto px-16 py-24 min-h-50vh`}

  & li {
    ${tw`relative flex items-center justify-center w-56 h-56 m-2 bg-gray-100 dark:bg-gray-800`}
  }

  & a {
    ${tw`w-full h-full`}
  }

  & .gatsby-image-wrapper {
    ${tw`w-full h-full m-2`}
    max-height: 13rem;
    max-width: 13rem;
  }

  ${ClusterSection}:nth-child(even) & {
    ${tw`items-end`}
  }

  ${props => (props.count === 1) && css`

    & ${GalleryInner} {
      max-width: 15rem;
    }
    `
  }

  ${props => (props.count === 2) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 2 + 0.5rem * 4);
    }
    `
  }

  ${props => (props.count === 3) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 3 + 0.5rem * 6);
    }
    `
  }

  ${props => (props.count === 4) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 4 + 0.5rem * 8);
    }
    `
  }

  ${props => (props.count === 5) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 3 + 0.5rem * 6);
    }
    `
  }

  ${props => (props.count === 6) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 4 + 0.5rem * 8);
    }
    `
  }

  ${props => (props.count === 7) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 4 + 0.5rem * 8);
    }
    `
  }
`

const options = {
  settings: {
    disablePanzoom: true,
  },
  buttons: {
    showAutoplayButton: false,
    showFullscreenButton: false,
    showDownloadButton: false,
    showThumbnailsButton: false,
  }
}

const Cluster = ({ block }) => (
  <ClusterSection data-sal="fade" data-sal-duration="500">
    <SimpleReactLightbox>
      <SRLWrapper options={options}>
        <Gallery count={block.gallery.length}>
          <Name>{block.name} {block.website && <Website href={block.website} target="_blank">Website</Website>}</Name>
          <GalleryInner>
            {block.gallery.map((gallery, i) => {
              return (
                <li key={i}>
                  <a href={gallery.image.childImageSharp.fluid.src}>
                    <Img
                      key={i}
                      alt={gallery.title}
                      objectFit='contain'
                      fluid={
                        gallery.image.childImageSharp.fluid
                      }
                    />
                  </a>
                </li>
              )
            })}
          </GalleryInner>
        </Gallery>
      </SRLWrapper>
    </SimpleReactLightbox>
  </ClusterSection>
)

export default Cluster
