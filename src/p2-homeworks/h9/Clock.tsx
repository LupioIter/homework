import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toDateString() // fix with date

    return (
        <div className={s.container}>
            <div className={s.timeDate}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.stringTime}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.stringDate}>
                        {stringDate}
                    </div>
                )}
            </div>

            <div className={s.buttons}>
                <SuperButton className={s.button} onClick={start}>start</SuperButton>
                <SuperButton className={s.button} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
