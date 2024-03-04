import React from "react";
import Section from "../components/section";
import * as Styles from "../styles/section_landing.module.css";
import { Trans } from "gatsby-plugin-react-i18next";
import ConsolaText from "../components/ConsolaText";


export default function() {

    return <Section>
        <header className={ Styles.landingDialog }>
            <div className={ Styles.sidebar } />
            <ConsolaText>
                <Trans>hello</Trans>
            </ConsolaText>
        </header>
    </Section>
}