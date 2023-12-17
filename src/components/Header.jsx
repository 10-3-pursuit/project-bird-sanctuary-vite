import React from 'react'

export const Header = React.memo(() => {
    console.log("Render Header.jsx")
  return (
  <header>
    <h1>Bird Sanctuary</h1>
    <h2>Donate to adopt a bird</h2>
  </header>
  );
})
