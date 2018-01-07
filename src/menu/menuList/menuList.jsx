import React from 'react'
import './menuList.css'

function MenuList(props) {
    const arr = props.arr
    const listItems = arr.map((item, i) => <li>Round {i}: {item}</li>)

    return (
        <ul>{listItems}</ul>
    )
}

export default MenuList