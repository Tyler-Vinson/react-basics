
import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header>
      <h1>My React Profile</h1>
      <p>Learning React one component at a time.</p>
    </header>
  )
}

function ProfileCard({ name, bio, favorite }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Favorite subject or hobby: {favorite}</p>
    </section>
  )
}

function TaskList() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedTask = task.trim()

    if (!trimmedTask) {
      return
    }

    setTasks((currentTasks) => [...currentTasks, trimmedTask])
    setTask('')
  }

  return (
    <section>
      <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-input">New task</label>
        <input
          id="task-input"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add task</button>
      </form>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Footer() {
  return <footer>Keep practicing React!</footer>
}

function App() {
  const [message, setMessage] = useState('Welcome to my React app!')

  return (
    <>
      <Header />
      <main>
        <ProfileCard
          name="Tyler Vinson"
          bio="Im a student at Base Camp formerly code academy."
          favorite="some say 'my life is like a videogame.'"
        />
        <section>
          <h2>Interactive message</h2>
          <p>{message}</p>
          <button
            type="button"
            onClick={() => setMessage('You changed the message!')}
          >
            Change message
          </button>
        </section>
        <TaskList />
      </main>
      <Footer />
    </>
  )
}

export default App
