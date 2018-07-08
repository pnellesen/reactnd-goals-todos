import React from 'react'

export default function List(props) {
    return (
        props.listItems.length > 0 && (
            <ul>
            {props.listItems.map((item) => {
                return  <li key={item.id}><span  className={`${props.hasOwnProperty('toggleItem') && 'todoItem'} ${item.complete && 'completed'}`} onClick={() => props.toggleItem && props.toggleItem(item)}>{item.name}</span><button onClick={() => props.removeItem(item)}>X</button></li>
            })}
            </ul>
        )
    )
}
