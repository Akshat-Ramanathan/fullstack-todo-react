import { useState } from "react";

function Form(props) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Todo Text</label>
                    <input type="text" name="title" value={value} onChange={handleChange} placeholder="Enter Todo..." />
                    <br />
                </div>
                <button className="ui blue button" type="submit">Add Todo</button>
            </form>
        </>
    );
}

export default Form;