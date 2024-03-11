import React, { Children } from "react";
import * as Styles from "../styles/consolaText.module.css"

const PreLine = () => <span className={Styles.preLine} > </ span>

export default (props) => {

    const { children, padding } = props;

    return <div className={Styles.consolaText} style={{padding: padding ?? "8px"}}>
        { children.map(c =>
        <>
            <PreLine />
            {c}
        </>
        )} 
    </div>
}