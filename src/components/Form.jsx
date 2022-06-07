import axios from "axios";
import { useState } from "react";
import { API } from '../constants';

function Form(props) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API}`,
                {
                    title: value,
                    complete: false
                });
        }
        catch {
            console.log("Error");
        }
        window.location.reload(false);
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