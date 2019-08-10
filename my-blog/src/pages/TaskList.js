import React from "react";
import Task from './Task';
import '../App.css';

const TaskList = ({ day }) => (
    <div className="task-list">
        <h1 className="day-week">{day}</h1>
        <Task description="CS007 Class" hour="13-15" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
        <Task description="LA550 Class" hour="13:30-15:00" />
    </div>
)

export default TaskList;