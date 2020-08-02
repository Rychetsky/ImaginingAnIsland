import React from 'react'
import Img from "gatsby-image/withIEPolyfill"
import styled, { css } from "styled-components"
import tw from 'twin.macro'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import WebsiteIcon from '../../svg/website.svg';

const Name = styled.h2`
  ${tw`self-center inline-block mx-2 mb-4 text-lg tracking-wide whitespace-pre-wrap md:self-auto`}
`

const Website = styled.a`
  ${tw`inline-block w-3 text-blue-600 fill-current dark:text-gray-300 hover:text-black dark:hover:text-gray-500`}
`

const ClusterSection = styled.section`
  ${tw`w-full`}
`

const GalleryInner = styled.ul`
  ${tw`flex flex-wrap justify-center w-full md:-mx-2`}
`

const Gallery = styled.div`
  ${tw`flex flex-col w-auto py-20 -mx-2 min-h-cluster`}

  & li {
    ${tw`relative flex items-start justify-center w-56 h-56 m-2`}
  }

  & li div {
    ${tw`w-full h-full cursor-pointer`}
    max-height: 13rem;
    max-width: 13rem;
    
  }

  & .gatsby-image-wrapper {
    ${tw`w-full h-full`}
    max-height: 13rem;
    max-width: 13rem;
  }

  ${ClusterSection}:nth-child(odd) & {
    ${tw`md:items-end`}
  }

  ${props => (props.count === 1) && css`

    & ${GalleryInner} {      
      @media (min-width: 768px) {
        max-width: 15rem;
      }
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
      max-width: calc(14rem * 3 + 0.5rem * 6);
      
      @media (min-width: 1280px) {
        max-width: calc(14rem * 4 + 0.5rem * 8);
      }
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
      max-width: calc(14rem * 3 + 0.5rem * 6);

      @media (min-width: 1280px) {
        max-width: calc(14rem * 4 + 0.5rem * 8);
      }
    }
    `
  }

  ${props => (props.count === 7) && css`

    & ${GalleryInner} {
      max-width: calc(14rem * 3 + 0.5rem * 6);

      @media (min-width: 1280px) {
        max-width: calc(14rem * 4 + 0.5rem * 8);
      }

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
          <Name>{block.name} {block.website && <Website href={block.website} target="_blank"><WebsiteIcon /></Website>}</Name>
          <GalleryInner>
            {block.gallery.map((gallery, i) => {
              return (
                <li key={i}>
                  <Img
                    key={i}
                    alt={gallery.title}
                    objectFit='contain'
                    fluid={
                      gallery.image.childImageSharp.fluid
                    }
                  />
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
