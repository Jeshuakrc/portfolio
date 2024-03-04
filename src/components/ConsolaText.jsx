import React from "react";
import * as Styles from "../styles/consolaText.module.css"

export default ({ children }) => (
    <div className={Styles.consolaText}>
        { children }
    </div>
)