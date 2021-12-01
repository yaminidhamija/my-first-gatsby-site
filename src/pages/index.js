// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="HomePage">
      <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" alt="Image"></StaticImage>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage