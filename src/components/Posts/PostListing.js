import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ListingWrapper = styled.div`
  max-width: 300px;
`

const PostListing = ({ info }) => {
  return (
    <ListingWrapper>
      <h3>
        <Link to={info.fields.slug}>{info.frontmatter.title}</Link>
      </h3>
      <span>{info.frontmatter.date}</span>
      <p>{info.excerpt}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: info.html }} /> */}
    </ListingWrapper>
  )
}

export default PostListing
