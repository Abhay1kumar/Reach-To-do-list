import React from 'react'

export default function Filter({ onFilterChange }) {
    const filters = ["All", "Active", "Completed"]

    const checkHandler = (currentValue) => {
        onFilterChange(currentValue);
    }

    return (

        <ul className="nav nav-pills todo-nav">
            {filters.map(item => {
                return (<li
                    key={item}
                    role="presentation"
                    className="nav-item all-task active"
                    onClick={() => checkHandler(item)}>
                    <a className="nav-link" style={{ cursor: "pointer" }}>
                        {item}
                    </a>
                </li>
                )
            })
            }
        </ul>
    )
}
