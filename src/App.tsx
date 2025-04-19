import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import DashboardPanel from './components/DashboardPanel/DashboardPanel';
import GreetUser from './components/GreetUser/GreetUser';
import Streak from './components/Streak/Streak';

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
        <DashboardPanel />
      </div>

      <div>
        <GreetUser />
      </div>

      <div>
        <Streak />
      </div>

    </>
  )
}

export default App


