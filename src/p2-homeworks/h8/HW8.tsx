import React, {ChangeEvent, useEffect, useState} from 'react'
import {ageCheckAC, homeWorkReducer, sortNameAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any
    const [nameSort, setNameSort] = useState<'up' | 'down'>('up')
    const [checked, setChecked] = useState<boolean>(false)

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div className={s.people} key={p._id}>
            <div className={s.first_column}>{p.name}</div>
            <div className={s.second_column}>{p.age}</div>
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(people, sortNameAC(nameSort)))
        setNameSort( 'up' )
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(people, sortNameAC(nameSort)))
        setNameSort( 'down' )
    }
    const check18 = (e: ChangeEvent<HTMLInputElement>) => {
        if (!checked) setPeople(homeWorkReducer(people, {type: 'check', payload: 18}))
        setChecked(e.currentTarget.checked)
        if (checked) setPeople(initialPeople)
    }

    return (
        <div className={s.container_main}>
            <hr/>
            <h3 className={s.hw}>homeworks 8</h3>
            {/*should work (должно работать)*/}
            <div className={s.container}>

                <div className={s.list}>
                    {finalPeople}
                </div>

                <div className={s.buttons_div}>
                    <div><SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton className={s.button} onClick={sortDown}>sort down</SuperButton></div>
                    <div><input className={s.checkbox} checked={checked} type={"checkbox"} onChange={check18}/> check 18</div>
                </div>
            </div>

            {/*<div><SuperButton onClick={check18}>check 18</SuperButton></div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
