// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const BlogHome: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="savdevarney blog" />
    <h1>blog home</h1>
    <p>list of blogs :) </p>
    <Link to="/posts/1">post #1</Link>
  </Layout>
)

export default BlogHome