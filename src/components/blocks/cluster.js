import React from 'react'
import Img from 'gatsby-image'

const Cluster = ({ block }) => (
  <section>
    <div className="hero-body">
      <div className="container">
        <h2 className="">{block.name}</h2>

        <ul className="cluster-gallery" data-cluster-count={block.gallery.length}>
          {block.gallery.map((gallery, i) => {
            return (
              <li key={i}>
                {gallery.title}
                <Img
                  alt={gallery.title}
                  fluid={
                    gallery.image.childImageSharp.fluid
                  }
                />
              </li>
            )
          })}
        </ul>

      </div>
    </div>
  </section>
)

export default Cluster
