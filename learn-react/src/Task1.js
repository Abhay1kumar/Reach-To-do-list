import React from 'react'

export default function Task1({ name, done, id, onCheckHandler }) {
    return (
        <div className={"todo-item" + ' ' + (done ? 'complete' : '')}>
            <div className="checker">
                <span className="">
                    <input type="checkbox" checked={done} onChange={e => onCheckHandler(id, e.target.checked)} />
                </span>
            </div>
            <span>{name}</span>

        </div>
    );
}
