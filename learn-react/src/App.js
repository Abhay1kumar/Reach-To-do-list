import React, { useState } from 'react'
import Form from './Form'
import Filter from './Filter'
import AllTask from './AllTask'

export default function () {
  const [filter, setFilter] = useState("All")
  const [newId, setNewId] = useState(2)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task-1",
      done: false,
    }]
  );
  const formSubmit = (value) => {
    // console.log(value);
    const newTask = {
      id: newId,
      name: value,
      done: false,
    }
    setTasks([...tasks, newTask])
    setNewId(newId + 1)
  }

  const onCheckHandler = (id, checked) => {
    // console.log(id+ " "+checked); 
    setTasks(tasks.map(item => {
      return item.id === id ? { ...item, done: checked } : item;
    }));
  };
  const onFilterChange = (newValue) => {
    // console.log(newValue);
    setFilter(newValue)
  }
  
  const filterTasks = () => {
    // "All", "Active", "Completed"
    if (filter === 'Active') {
      return tasks.filter(item => item.done === false);
    } else if(filter === 'Completed') {
      return tasks.filter(item => item.done === true);
    
    }

    return tasks;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={formSubmit} />
              <Filter onFilterChange={onFilterChange} />
              <AllTask tasks={filterTasks()} onCheckHandler={onCheckHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
