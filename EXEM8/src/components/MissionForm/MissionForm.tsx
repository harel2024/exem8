

import React, { useState } from 'react'
import './MissionForm.css'
import { Mission } from '../../components/MissionList/MissionListManeg'

interface MissionFormProps {
    addMission: (mission: Mission) => void
}

const MissionForm: React.FC<MissionFormProps> = ({ addMission }) => {
 
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Pending')
    const [priority, setPriority] = useState('Low')

    // פונקציה לשליחת הטופס
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const mission: Mission = {
            name,
            description,
            status,
            priority
        }
        addMission(mission)
        // איפוס שדות הטופס לאחר השליחה
        setName('')
        setDescription('')
        setStatus('Pending')
        setPriority('Low')
    }

    return (
        <div className="MissionForm">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select 
                    name="status" 
                    id="status" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <select 
                    name="priority" 
                    id="priority" 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Mission</button>
            </form>
        </div>
    )
}

export default MissionForm

