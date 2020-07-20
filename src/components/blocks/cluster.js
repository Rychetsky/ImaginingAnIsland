import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from "styled-components"
import tw from 'twin.macro'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Name = styled.h2`
  ${tw`text-xl font-bold`}
`

const Image = styled.div`
  ${tw`w-full`}
`

const Gallery = styled.div`
  ${tw`py-20 px-4 border min-h-50vh w-full flex items-center justify-center`}
  
  & li {
    ${tw`block`}
  }

  ${props => (props.count == 1) && css`
    ${tw``}

    & ${GalleryInner} {
      ${tw`w-64 max-w-full block`}
    }
    `
  }

  ${props => (props.count == 2) && css`
    ${tw` `}

    & ${GalleryInner} {
      ${tw`max-w-2xl grid-cols-2 gap-24`}
    }
    `
  }

  ${props => (props.count == 3) && css`
    ${tw` `}

    & ${GalleryInner} {
      ${tw`grid-cols-3 gap-24`}
    }
    `
  }

  ${props => (props.count == 4) && css`
    ${tw` `}

    & ${GalleryInner} {
      ${tw`grid-cols-3 gap-24`}

      & li:nth-child(4) {
        ${tw`md:col-start-2`}
      }
    }
    `
  }

  ${props => (props.count == 5) && css`
    ${tw` `}

    & ${GalleryInner} {
      ${tw`max-w-4xl grid-cols-1 md:grid-cols-3 gap-24`}

      & li:nth-child(5) {
        grid-column: 3;
      }
    }
    `
  }

  ${props => (props.count == 6) && css`
    ${tw` `}

    & ${GalleryInner} {
      ${tw`max-w-3xl grid-cols-3 gap-24`}
    }
    `
  }

  ${props => (props.count == 7) && css`
    ${tw``}

    & ${GalleryInner} {
      ${tw`max-w-3xl grid-cols-3 gap-24`}
    }
    `
  }
`

const GalleryInner = styled.ul`
  ${tw`max-w-6xl w-full grid justify-center items-center`}
`

const Title = styled.h3`
  ${tw`text-sm text-gray-800 mt-2`}
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
  <section>
    <SimpleReactLightbox>
      <div className="hero-body">
        <div className="container">
          <Name>{block.name}</Name>
            <SRLWrapper options={options}>
              <Gallery count={block.gallery.length}>
                <GalleryInner>
                  {block.gallery.map((gallery, i) => {
                    return (
                      <li key={i}>
                        <a href={gallery.image.childImageSharp.large.src}>
                          <Image>
                            <Img
                              alt={gallery.title}
                              fluid={
                                gallery.image.childImageSharp.thumb
                              }
                            />
                          </Image>
                        <Title>
                          {gallery.title}
                        </Title>
                        </a>
                      </li>
                    )
                  })}
                </GalleryInner>
              </Gallery>
            </SRLWrapper>
        </div>
      </div>        
    </SimpleReactLightbox>
  </section>
)

export default Cluster
