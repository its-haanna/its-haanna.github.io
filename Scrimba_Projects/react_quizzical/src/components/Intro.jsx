import React from 'react'

export default function Intro({ setGame }) {

  function displaySettings() {
    setGame(prevState => {
      return {
        ...prevState,
        pageView: 'settings',
      }
    })
  }

  return (
    <div className="container-intro">
      <h1>Quizzical</h1>
      <p className="description">Test your knowledge, if you dare!</p>
      <button type="button" className="start-btn" onClick={displaySettings}>Begin</button>
    </div>
  )
}