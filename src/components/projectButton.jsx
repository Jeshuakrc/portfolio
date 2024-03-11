import React from "react";
import * as Styles from "../styles/projectButton.module.css"



export const Type = Object.freeze({
    SOLID: Symbol("solid"),
    OUTLINE: Symbol("outline")
})

export default ({ children, type }) => {

    const t = type ?? Type.SOLID;
    let c;
    switch (t) {
        case Type.OUTLINE: c = Styles.buttonOutline; break;
        default: c = Styles.buttonSolid; break;
    }

    return <button className={c}>
        {children}
    </button>
}