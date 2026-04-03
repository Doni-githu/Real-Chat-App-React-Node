import React from 'react'
import { Link } from "react-router"
import './ListItem.css'

function ListItem({ item }) {
    return (
        <div className='card'>
            <div>
                <img src="https://picsum.photos/200/200" alt="The Thumbnails" />
            </div>
            <div className='card-right'>
                <div className='card-right-top'>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>

                </div>
                <div className='card-buttons'>
                    <Link className='btn btn-primary' to={`/${item.id}`}>Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default ListItem