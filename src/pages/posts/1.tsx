// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const BlogHome: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="post 1" />
    <h1>Post 1</h1>
    <p>the first post :)</p>
  </Layout>
)

export default BlogHome