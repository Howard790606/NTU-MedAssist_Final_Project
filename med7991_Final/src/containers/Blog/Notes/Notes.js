import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import imgSrc from "./pic3.png";

export default class Notes extends Component {
    render() {
        return (
            <div>
                <h1>Notes</h1>
                <p>
                   MedAssist Notes here.
                </p>
                <img src={imgSrc} style={{width:800}}/>
            </div>
        );
    }
}
