import Title from "./Title";
import Footer from "./Footer";
import Main from "./Main";
import Session from "./Session";
import { useState } from 'react';

function App() {
  const [session, setSession] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleAddClick = () => {
    setSession(s => s + 1)
  }

  const handleSubClick = () => {
    setSession(s => s - 1)
    if (session <= 1) {
      setSession(1);
    }
  }

  const handleBrAddClick = () => {
    setBreakTime(b => b + 1)
  }

  const handleBrSubClick = () => {
    setBreakTime(b => b - 1)
    if (breakTime <= 1) {
      setBreakTime(1);
    }
  }
  return (
    <div className="App">
     <Title />
     <Main 
        sessTime={session}  
        addClick={handleAddClick} 
        subClick={handleSubClick}
        brTime={breakTime}
        brAddClick={handleBrAddClick}
        brSubClick={handleBrSubClick}
    />
     <Session sessTimer={session} setSessTimer={setSession} brTime={breakTime} setBrTime={setBreakTime} />
     <Footer />
    </div>
  );
}

export default App;
