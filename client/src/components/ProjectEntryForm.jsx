import { useState } from "react";
import { MdAdd } from "react-icons/md";
import '../styles/component/ProjectEntryForm.css';

export default function ProjectEntryForm({ onAdd }){
    const [projName, setProjName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!projName.trim()) {
            setError('Project name is required');
            return;
        }
        
        if (projName.trim().length < 3) {
            setError('Project name must be at least 3 characters');
            return;
        }

        try {
            await onAdd(projName);
            setProjName('');
        } catch (err) {
            setError(err.message);
        }
    }

    const handleInput = (e) => {
        setProjName(e.target.value);
        setError('');
    }

    return(
        <form className="project-form">
            <input 
                onChange={handleInput} 
                value={projName} 
                placeholder="Enter Project here..."
            />
            <button onClick={handleSubmit}> ADD <MdAdd/></button>
            {error && <div className="form-error">{error}</div>}
        </form>
    );
}