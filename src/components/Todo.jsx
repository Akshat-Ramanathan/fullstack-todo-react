import axios from "axios";
import { API } from "../constants";

function Todo({ id, complete, title }) {

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
        }
        catch {
            console.log("Error");
        }
        window.location.reload(false);
    }

    const handleToggle = async (id, complete) => {
        try {
            await axios.patch(`${API}/${id}`,{ "complete": !complete});
        }
        catch {
            console.log("Error");
        }
        window.location.reload(false);
    }

    return (
        <>
            <p className="ui big header">
                <span style={{ color: "blue" }}>{id} | </span>{title}&nbsp;
            </p>
            {complete && <span className="ui green label">Completed</span>}
            {!complete && <span className="ui gray label">Incomplete</span>}
            <button className="ui blue button" onClick={() => { handleToggle(id,complete) }}>Toggle Completion</button>
            <button className="ui red button" onClick={() => { handleDelete(id) }}>Delete</button>
        </>
    );
}

export default Todo;