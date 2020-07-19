import React from 'react'
import Img from 'gatsby-image'

const Cluster = ({ block }) => (
  <section>
    <div className="hero-body">
      <div className="container">
        <h2 className="">{block.name}</h2>

        {block.gallery.map((gallery, i) => {
          return (
            <div key={i} >{gallery.title}
              <Img
                alt={gallery.title}
                fluid={
                  gallery.image.childImageSharp.fluid
                }
              />
            </div>
          )
        })}

      </div>
    </div>
  </section>
)

export default Cluster
