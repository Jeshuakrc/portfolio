import React from "react";
import Section from "../components/section";
import * as Styles from "../styles/section_landing.module.css";
import { Trans } from "gatsby-plugin-react-i18next";
import ConsolaText from "../components/ConsolaText";
import ProjectButton from "../components/ProjectButton.jsx";
import { Type as ButtonType } from "../components/ProjectButton.jsx";
import DownloadIcon from "../icons/download-fill.svg";


export default function() {
    
    const padding = "0px";

    return <Section>
        <header className={ Styles.landingDialog }>
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
                    <p></p>
                    <p><Trans>landing_p4</Trans></p>
                </ConsolaText>

            </div>
        </header>
    </Section>
}