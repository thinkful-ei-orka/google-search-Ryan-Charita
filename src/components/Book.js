import React from 'react'

export default function Book(props) {
    return (
        <div className="book">
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
} 