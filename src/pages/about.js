import React from "react";
import * as Styles from "../styles/page_about.module.css";
import DialogBox from "../components/DialogBox";
import { Type as DialogBoxType } from "../components/DialogBox";
import { TechGrid, TechGridNode } from "../components/TechGrid";

export default function() {
    return <TechGrid className={Styles.about} cellSize={40}>

    </TechGrid>
}

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