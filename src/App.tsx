import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <div>
        <p></p>
        <p>Track your mind, understand your mood!</p>
      </div>

      <div class="Dashboard_Panel">
        <button>Dashboard</button>
        <button>Setting</button>
      </div>
      
      <div>
        <p>Hello, </p>
      </div>
    </>
  )
}

export default App
