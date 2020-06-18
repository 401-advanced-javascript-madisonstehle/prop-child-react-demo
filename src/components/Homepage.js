import React from 'react';

function Homepage(props) {
  return (
    <>
      <header><h1>Home</h1></header>

      {props.children ? (props.children.length ? props.children : (<div style={{ color: 'red' }}>{props.children}</div>)) : <p>No content added</p>}

    </>
  )
}

export default Homepage;