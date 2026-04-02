import React from 'react'

function ListItem({ item }) {
    return (
        <div>{item.title} {item}</div>
    )
}

export default ListItem