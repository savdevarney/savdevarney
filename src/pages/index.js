import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="savdevarney" />
    <h1>woot!</h1>
    <Link to="/blog">Blog</Link> <br />
  </Layout>
)

export default IndexPage
