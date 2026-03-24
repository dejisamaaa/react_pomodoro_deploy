import BreakInfo from "./BreakInfo";
import SessionInfo from "./SessionInfo";

const Main = ({ sessTime, addClick, subClick, brTime, brAddClick, brSubClick }) => {
  return (
    <main className="main">
      <BreakInfo brTime={brTime} brAddClick={brAddClick} brSubClick={brSubClick} />
      <SessionInfo sessTime={sessTime} addClick={addClick} subClick={subClick} />
    </main>
  )
}

export default Main