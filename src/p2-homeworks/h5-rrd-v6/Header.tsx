import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css';

function Header() {


    return (
        <div className={s.header_wrapper}>
            <div className={s.sidebar}>

                    <NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>

                    <NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>

                    <NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>

            </div>
                <div className={s.hover_div}></div>
        </div>
    )
}

export default Header
