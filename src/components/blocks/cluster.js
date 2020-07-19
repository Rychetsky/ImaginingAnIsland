import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from "styled-components"
import tw from 'twin.macro'

const Name = styled.h2`
  ${tw`text-xl font-bold`}
`

const Image = styled.div`
  ${tw`w-full`}
`

const Gallery = styled.div`
  ${tw`p-4 bg-green-500 min-h-50vh w-full flex items-center justify-center`}
  
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
      ${tw`grid-cols-2 gap-24`}
    }
    `
  }
`

const GalleryInner = styled.ul`
  ${tw`max-w-6xl w-full grid justify-center items-center`}
`

const Title = styled.h3`
  ${tw`text-sm`}
`

const Cluster = ({ block }) => (
  <section>
    <div className="hero-body">
      <div className="container">
        <Name>{block.name}</Name>

        <Gallery count={block.gallery.length}>
          <GalleryInner>
            {block.gallery.map((gallery, i) => {
              return (
                <li key={i}>
                  <Image>
                    <Img
                      alt={gallery.title}
                      fluid={
                        gallery.image.childImageSharp.fluid
                      }
                    />
                  </Image>
                  <Title>
                    {gallery.title}
                  </Title>
                </li>
              )
            })}
          </GalleryInner>
        </Gallery>

      </div>
    </div>
  </section>
)

export default Cluster
