import React from "react";
import Section from "../components/section";
import * as Styles from "../styles/section_landing.module.css"


export default function() {
    return <Section>
        <header className={Styles.landingDialog}>
            <div className={Styles.sidebar} />
        </header>
    </Section>
}