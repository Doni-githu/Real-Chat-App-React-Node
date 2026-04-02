import React from 'react'
import ListItem from '../ListItem/ListItem'

function List() {
    const data = [
        {
            title: "Title",
            description: "Descripttion",
            file: "https://picsum.photos/200/300"
        }
    ]
    return (
        <div>
            {data.map((item) => {
                <ListItem item={item} />
            })}
        </div>
    )
}

export default List