import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer"
import About from "./components/About"
import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  //fetch tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  //fetch task
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
// add task
const addTask = async(task) => {
  const res = await fetch ('http://localhost:5000/tasks', {
    method:'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
}
//delete task  ` `
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !== id));
 
}
//set reminder
const toggleReminder = async(id) => {
  const tasktoToggle = await fetchTask(id)
  const updTask = {...tasktoToggle, reminder: !tasktoToggle.reminder}
  const res= await fetch (`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map(task => task.id===id ? {...task, reminder:data.reminder}: task
    )
  )
}
  return (
    <Router>
    <div className="container">
     <Header title="God dag" onAdd={()=> setShowAddTask(!showAddTask) } showAdd={showAddTask} />
     
     <Route path='/' exact render={(props)=> (
       <div>
         {showAddTask && <AddTask onAdd={addTask} />}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
       </div>
     )} />
     <Route path='/about' component={About} />
     <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
