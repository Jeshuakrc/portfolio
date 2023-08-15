import React, { Fragment } from "react"
import HomeSection from "../sections/homeSection"


const IndexPage = () => {
  return <Fragment>
    <HomeSection />
    <HomeSection />
  </Fragment>
}

export default IndexPage

export const Head = () => <title>Home Page</title>
