import React from 'react'
import { Route, Routes } from "react-router";
import { Link } from "react-router";

const TaskList = ( {mockData}) => {


    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {mockData.map((data) => (
                    <li key={data.id}>
                        <Link to={"/task/" + data.id}>{data.title}</Link>   
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList