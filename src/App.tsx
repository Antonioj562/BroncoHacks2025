import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import DashboardPanel from './components/DashboardPanel/DashboardPanel';
import GreetUser from './components/GreetUser/GreetUser';
import Streak from './components/Streak/Streak';
import DailyInsight from './components/DailyInsights/DailyInsights';
import MoodSelector from './components/MoodSelector/MoodSelector';
import TipsCard from './components/TipsCard/TipsCard';
import TopBar from './components/TopBar/TopBar';

function App() {

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
      <TopBar />
    
      <div className="main-layout">
        <DashboardPanel />
      <div className="content-area">
        <GreetUser />

       
          <div>
            <MoodSelector />
          </div>

          <div>
            <Streak />
          </div>

        <DailyInsight />
        <TipsCard />
      </div>
    </div>
    </>
  )
}

export default App


