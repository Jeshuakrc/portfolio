import React, { Fragment } from "react";
import Landing from "../sections/landing";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";


const IndexPage = () => {

  const translation = useTranslation();
  return <Fragment>
    <Landing />
  </Fragment>
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;