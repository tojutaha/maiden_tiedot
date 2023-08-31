const Filter = ({ handleFilterChange, handleBackspace }) => {
  return (
    <div>
      find countries <input onChange={handleFilterChange} onKeyDown={(e) => {
        if (e.key === "Backspace") {
          handleBackspace();
        }
      }}></input>
    </div>
  )
}

export default Filter