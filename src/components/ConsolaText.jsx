import React, { Children } from "react";
import * as Styles from "../styles/consolaText.module.css"

const PreLine = () => <span className={Styles.preLine} > </ span>

export default (props) => {

    let { children, padding } = props;

    if (!Array.isArray(children)) {
        children = [children];
    }

    return <div className={Styles.consolaText} style={{padding: padding ?? "8px"}}>
        { children.map(c =>
        <>
            <PreLine />
            {c}
        </>
        )} 
    </div>
}