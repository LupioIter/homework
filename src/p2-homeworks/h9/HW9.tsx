import React from 'react'
import Clock from './Clock'
import s from './hw9.module.css'

function HW9() {
    return (
        <div className={s.container}>

                <div className={s.container_h1}>
                    <h1>
                        Homework 9
                    </h1>
                </div>

                {/*should work (должно работать)*/}
                <div className={s.container_clock}>
                    <Clock />
                </div>

        </div>
    )
}

export default HW9
