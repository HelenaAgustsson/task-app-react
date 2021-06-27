import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
        
    {
        "id":1,
        "text": "Communications Lecture",
        "day": "Feb 4th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
])
//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
 
}
//set reminder
const toggleReminder = (id) => {
  console.log(id);
}
  return (
    <div className="container">
     <Header title="God dag" />
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
