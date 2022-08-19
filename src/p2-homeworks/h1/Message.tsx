import React from 'react'
import s from "./Message.module.css"
import HW1 from "./HW1";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: number | string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>

            <div className={s.img_wrapper}>
                <img className={s.message_img} src={props.avatar} alt="avatar"/>
            </div>

            <div className={s.angle}></div>

            <div className={s.message_area}>
                <span className={s.message_name}>{props.name}</span>
                <p className={s.message_text}>{props.message}</p>
                <span className={s.message_time}>{props.time}</span>
            </div>

        </div>

    )
}

export default Message
