function Todo({ id, complete, title }) {
    return (
        <>
            <p className="ui big header">
                <span style={{ color: "blue" }}>{id} | </span>{title}&nbsp;
            </p>
            {complete && <span className="ui green label">Completed</span>}
            {!complete && <span className="ui gray label">Incomplete</span>}
            <button className="ui blue button">Toggle Completion</button>
            <button className="ui red button">Delete</button>
        </>
    );
}

export default Todo;