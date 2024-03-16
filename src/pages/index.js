import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import * as Styles from "../styles/page_index.module.css";
import DialogBox from "../components/DialogBox.jsx";
import ConsolaText from "../components/ConsolaText";
import ProjectButton from "../components/ProjectButton.jsx";
import { Type as ButtonType } from "../components/ProjectButton.jsx";
import DownloadIcon from "../icons/download-fill.svg";
import GithubIcon from "../icons/github.svg";
import LinkedinIcon from "../icons/linkedin.svg";


const linkedinURL = "https://www.linkedin.com/in/jeshuakrc/";
const githubURL = "https://github.com/Jeshuakrc";

const IndexPage = () => {

  const padding = "0px";

  return <div className={Styles.indexWrapper}> <header className={ Styles.landingDialog }>
    <DialogBox>
        <div className={ Styles.sidebar } />
        <div className={ Styles.consoleContainer}>

            <ConsolaText padding={padding}>
              <p><Trans values={{name: "Jeshua K. Reyes"}}>landing_p1</Trans></p>
              <p><Trans>landing_p2</Trans></p>
              <p></p>
              <p><Trans>landing_p3</Trans></p>
            </ConsolaText>

            <div className={Styles.buttonContainer}>

                <ProjectButton>
                    <strong><Trans>landling_button_abbout_me</Trans></strong>
                </ProjectButton>

                <ProjectButton type={ButtonType.OUTLINE}>
                    <strong><Trans>landling_button_my_cv</Trans></strong>
                    <DownloadIcon style={{width: "20px", height: "20px", marginLeft: "8px"}} />
                </ProjectButton>

            </div>

            <ConsolaText padding={padding}>
                <p><Trans>landing_p4</Trans></p>
            </ConsolaText>

            <div className={Styles.buttonContainer}>
                <a href={githubURL} target="_blank"><GithubIcon /></a>
                <a href={linkedinURL} target="_blank"><LinkedinIcon /></a>
            </div>

            <ConsolaText padding={padding}>
                <p><Trans>landing_p5</Trans></p>
            </ConsolaText>

        </div>
    </DialogBox>
  </header> </div>
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