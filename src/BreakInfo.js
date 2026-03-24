const BreakInfo = ({ brTime, brAddClick, brSubClick }) => {
  return (
     <section className="break_sec">
        <h2 className="break_title">Break Length</h2>
        <p onClick={brSubClick}>⬇️</p>
        <p>{brTime}</p>
        <p onClick={brAddClick}>⬆️</p>
    </section>
  )
}

export default BreakInfo