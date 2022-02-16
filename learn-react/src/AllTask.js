import React from 'react'
import Task1 from './Task1'

export default function AllTask({tasks,onCheckHandler}) {

    return (
        <div className="todo-list"> 
            {
                tasks.map(item => {
                    return <Task1 
                    key={item.id} 
                    name={item.name} 
                    done={item.done} 
                    onCheckHandler={onCheckHandler}
                    id={item.id}
                    />
                })
            }
        </div>
    )
}
