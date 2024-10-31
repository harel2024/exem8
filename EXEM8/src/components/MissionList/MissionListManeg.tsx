import React,{useState, useEffect} from 'react'
import MissionForm from '../MissionForm/MissionForm'
import axios from 'axios';
import MissionItem from '../MissionItem/MissionItem';


export interface Mission {
    _id?: string
    name: string
    description: string
    status: string
    priority: string
}


    const BASE_URL = "https://reactexambackend.onrender.com/missions/:8351176"
    const MissionListManeg: React.FC = () => {
    
        const [Missions, setTodos] = useState<Mission[]>([]);
    
        const getMissions = async () => {
          try {
            const response = await axios.get<Mission[]>(BASE_URL);
            setTodos(response.data);
          } catch (error) {
            console.error("error featching data", error);
          }
        };
        useEffect(() => {
          getMissions();
        }, []);
      
        const addMission = async (mission: Mission): Promise<void> => {
          try {
            const response = await axios.post<Mission>(BASE_URL, 
              mission
            );
            console.log("a");
            
            getMissions();
          } catch (error) {
            console.error("cant add mission", error);
          }
        };
      
        const deleteToMission = async (id: string): Promise<void> => {
          try {
            await axios.delete(`${BASE_URL}/${id}`);
            getMissions();
            
          } catch (error) {
            console.error("cant delete mission", error);
          }
        };

    const UpdateStatusMission = async (id: string): Promise<void> => {
        try {
          await axios.post(`${BASE_URL}/progress/${id}`);
          getMissions();
          
        } catch (error) {
          console.error("cant delete mission", error);
      }
    }

  return (
    <div>
        

      <MissionForm addMission={addMission} />
      
      {Missions.map((mission) => (
          <MissionItem
          key={mission._id}
            mission={mission}
            deleteToMission={deleteToMission}
            UpdateStatusMission={UpdateStatusMission}
          />
        ))}
  
    </div>
  )
}

export default MissionListManeg












