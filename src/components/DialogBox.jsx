import React from "react";
import * as Styles from "../styles/dialogBox.module.css"

export const Type = Object.freeze({
    DEFAULT: Symbol("default"),
    OUTLINE: Symbol("outline")
})

export default ({ style, children, className, type }) => {
    

    let _type = type ?? Type.DEFAULT;
    const typeClass = (_type === Type.DEFAULT)
        ? Styles.dialogBox
        : Styles.dialogBoxOutline;

    const clazzName = [className, typeClass].filter(Boolean).join(" ");

    return <div className={clazzName} style={style}>
        { children }
    </div>
}