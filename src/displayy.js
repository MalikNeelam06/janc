import React from 'react'

function Displayy({resultt}) {
  return (
    <div>
        <p>{resultt.email}</p>
        <p>{resultt.firstName}</p>
        <p>{resultt.gender}</p>
        <p>{resultt.id}</p>
        <p>{resultt.image}</p>
        <p>{resultt.lastName}</p>
        <p>{resultt.token}</p>
        <p>{resultt.username}</p>
    </div>
  )
}

export default Displayy;