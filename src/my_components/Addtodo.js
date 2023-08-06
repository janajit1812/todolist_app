import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be blank");
        }
        else {
            props.addtodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container" style={{minHeight: "100vh"}}>
            <div className='container my-3'>
                <h3 className='text-center'>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo title</label>
                        <input type="text" className="form-control" value={title} id="title" onChange={(e) => { setTitle(e.target.value) }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Addtodo;
