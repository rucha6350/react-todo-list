import React, { useState } from "react";

function NewToDoForm(props) {

    const [description,setDescription] = useState('')
    const [assigned,setAssigned] = useState('')

    // const descriptionChange = (event) => {
    //     console.log(event.target.value)
    //     setDescription(event.target.value)
    // }

    // const assignedChange = (event) => {
    //     console.log(event.target.value)
    //     setAssigned(event.target.value)
    // }

    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description,assigned);
            setDescription('')
            setAssigned('')
        }
    }

    return (
        <div>
            <form>
                <div class="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required 
                        onChange={e => setAssigned(e.target.value)} 
                        value={assigned}
                    ></input>                   
                </div>
                <div class="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required 
                        onChange={e => setDescription(e.target.value)} 
                        value={description}
                    ></textarea>
                </div>                
                <button 
                    type="button" 
                    class="btn btn-primary mt-3"
                    onClick={submitTodo}
                >Add Todo</button>
            </form>
        </div>
    )
}

export default NewToDoForm