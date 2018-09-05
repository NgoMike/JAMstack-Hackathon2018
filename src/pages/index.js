import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people!</h1>
    <p>Welcome to Mike's Gatsby site.</p>
    <p>I'm a full stack developer and I look forward to meeting everyone and build cool stuff at the hackathon!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
