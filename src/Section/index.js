import React from "react";
import "./style.css";

const section = ({ title, body, extraHeaderContent }) => (

    <div className="sections">
        <div className="section__item section__item--section">
            <div className="section__item--text">{title}</div>
            <div className="buttons">
                {extraHeaderContent}

            </div>
        </div>
        <div className="section__item">
            {body}
        </div>
    </div>
)

export default section;