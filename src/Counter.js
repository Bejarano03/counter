import React, { useState } from 'react'

export default function Counter() {

  const [increment, setincrement] = useState(0);
  const [incrementAfterDelay, setincrementAfterDelay] = useState(0);
  const [incrementTwice, setincrementTwice] = useState(0);
  const [incrementTwiceCorrect, setincrementTwiceCorrect] = useState(0);

  function handleClickIncrement() {
    setincrement(increment + 1);
  }

  function handleClickIncrementDelay() {
    setTimeout(() => {setincrementAfterDelay(incrementAfterDelay + 1)}, 1000);
  }

  function handleClickIncrementTwo() {
    setincrementTwice(incrementTwice + 2);
  }

  function handleClickIncrementTwoc() {
    setincrementTwiceCorrect(incrementTwiceCorrect + 2)
  }

  return (
    <div>
        <br />
        <button onClick={handleClickIncrement}>Increment +1</button>
        <p>{increment}</p>
        < br/>
        < br/>
        <button onClick={handleClickIncrementDelay}>Increment After Delay</button>
        <p>{incrementAfterDelay}</p>
        < br/>
        < br/>
        <button onClick={handleClickIncrementTwo}>Increment +2</button>
        <p>{incrementTwice}</p>
        < br/>
        < br/>
        <button onClick={handleClickIncrementTwoc}>Increment +2 Correctly</button>
        <p>{incrementTwiceCorrect}</p>
        
        
    </div>
  )
}
