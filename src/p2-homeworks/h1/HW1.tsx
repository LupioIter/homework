import React from 'react'
import Message from "./Message";


function HW1() {
    const messageData =
        {
            avatar: 'https://play-lh.googleusercontent.com/AAwZnSI92iqjx3FwSwpiz2DMqXX5xb10alzK5dBmU38sPOOt7PC5xjI-peUj-_76otg',
            name: 'Lupio Iter',
            message: 'The true samurai doesn\'t have a goal, only a way...',
            time: '0:47',
        }

    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
