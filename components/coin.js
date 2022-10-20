import React from 'react'

export default function coin({ coin }) {
  return (
    <div>
      <img src={coin.coin} width = {100} height = {100} />
      <h3>{coin.name}</h3>
      <p>{coin.price}</p>
    </div>
  )
}
