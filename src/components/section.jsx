import React from "react";
import { sec } from "../styles/section.module.css"

export default function({ children }) {
    return <div className={sec}>
        { children }
    </div>
}