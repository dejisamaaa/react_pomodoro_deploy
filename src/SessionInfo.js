const SessionInfo = ({ sessTime, addClick, subClick }) => {
  return (
    <section className="session_InfoSec">
        <h2 className="session_InfoSec_Title">Session Length</h2>
        <p onClick={subClick}>⬇️</p>
        <p>{sessTime}</p>
        <p onClick={addClick}>⬆️</p>
    </section>
  )
}

export default SessionInfo