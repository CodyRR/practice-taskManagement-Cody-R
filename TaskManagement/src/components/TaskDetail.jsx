import { useParams } from "react-router"
import { Link } from "react-router";

const TaskDetail = ({mockData}) => {

    const { id } = useParams();
    const task = mockData.find((task) => String(task.id) === id)

    if (!task) {
		return (
            <div>
                <p>Task not found.</p>
                <Link to="/">Go Back</Link>
            </div>
        )
	}
    return(
        <div>
            <h3>Current Task</h3>
            <p>ID: {task.id}</p>
            <p>Task: {task.title}</p>
            <p>Details: {task.description}</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default TaskDetail