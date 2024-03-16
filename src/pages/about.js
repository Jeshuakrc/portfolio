import React from "react";
import * as Styles from "../styles/page_about.module.css";
import DialogBox from "../components/DialogBox";
import { Type as DialogBoxType } from "../components/DialogBox";

export default function() {
    return <div className={Styles.aboutWrapper}>
        <DialogBox className={Styles.floatingDialog} type={DialogBoxType.OUTLINE}>
            Some place holder text

        </DialogBox>

    </div>
}
