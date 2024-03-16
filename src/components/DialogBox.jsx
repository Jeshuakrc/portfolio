import React from "react";
import * as Styles from "../styles/dialogBox.module.css"

export default (props) => {
    const { style, children } = props;
    return <div className={Styles.dialogBox} style={style}>
        { children }
    </div>
}