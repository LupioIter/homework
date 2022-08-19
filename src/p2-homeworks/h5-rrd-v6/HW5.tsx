import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.main_container}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter basename={'/'}>

            <Header/>

            <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
