import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p></p>
        <p>Track your mind, understand your mood!</p>
      </div>

      <div className="Dashboard_Panel">
        <button className="dashboard">Dashboard</button>
        <button className="setting">Setting</button>
      </div>

      <div>
        <p>Hello, </p>
      </div>
    </>
  )
}

export default App