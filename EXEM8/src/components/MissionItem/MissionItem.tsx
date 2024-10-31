import React , {useState} from 'react'
import { Mission, } from '../../components/MissionList/MissionListManeg'
import "./MissionItem.css"



interface MissionItemProps {
    mission: Mission
    deleteToMission: (id: string) => void
    UpdateStatusMission: (id: string) => void

}




const MissionItem: React.FC<MissionItemProps> = ({mission,deleteToMission, UpdateStatusMission}) => {
    const getStatusColor = (status: string): string => {
        switch (status) {
          case "Pending":
            return "red";
          case "In Progress":
            return "orange";
          case "Completed":
            return "green";
          default:
            return "black";
        }
      };
    
  
    return (
        <div className='MissionCard'  style={{ backgroundColor: getStatusColor(mission.status) }}>
            <div className='Card'>
               
            <h4>Name: {mission.name}</h4>
            <p>Status: {mission.status}</p>
            <p>Priority: {mission.priority}</p>
            <p>Description: {mission.description}</p>
            </div>
            <div className='buttons'>
            <button id='delete' onClick={() => deleteToMission(mission._id!)}>Delete</button>
            <button id='Progress' onClick={() => UpdateStatusMission(mission._id!)}>Update</button>
            </div>
        </div>
      )
    }

export default MissionItem




