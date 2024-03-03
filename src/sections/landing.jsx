import React from "react";
import Section from "../components/section";
import * as Styles from "../styles/section_landing.module.css"
import * as GlobalStyles from "../styles/layout.module.css"
import { graphql, useStaticQuery } from "gatsby";


export default function() {
    const data = useStaticQuery(graphql`
        query myQuery {
        markdownRemark(frontmatter: {title: {eq: "landing"}}) {
            html
        }
        }
    `)

    return <Section>
        <header className={Styles.landingDialog}>
            <div className={Styles.sidebar} />
            <div className={GlobalStyles.consolaText} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </header>
    </Section>
}