import React, { Fragment } from "react"
import Landing from "../sections/landing"
import { graphql } from "gatsby"


const IndexPage = () => {
  return <Fragment>
    <Landing />
  </Fragment>
}

export default IndexPage

export const Head = () => <title>Home Page</title>
