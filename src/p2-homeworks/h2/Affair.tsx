import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const AffairCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = s.affairName + " " + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <div className={s.affairName}>
                {props.affair.name}
            </div>
            <div className={priorityClass}>
                {props.affair.priority}
            </div>
            <button onClick={AffairCallback} className={s.affairButton}>X</button>
        </div>
    )
}

export default Affair
