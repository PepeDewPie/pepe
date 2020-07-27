import React from 'react'
import { MarketsDropdown } from './MarketsDropdown'

export function PoolForm() {
  return (
    <div>
      <h3>
        Select a prediction market
      </h3>
      <MarketsDropdown/>

      <h3>
        Input your liquidity
      </h3>

      <span>
        Withdraw your liquidity on Omen before December 31st to avoid loses related to high volatility
      </span>

      <button 
        style={{
          display: 'block',
          margin: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          padding: '0.55rem 1.9rem',
          borderRadius: '42px',
          cursor: 'pointer',
          border: '1px solid',
          fontSize: '23px'
        }}
      >
        POOL
      </button>

      <span>
        Providing liquidity is risky and could result in near total loss.
        It is important to withdraw liquidity before the event occurs and to be aware the market could move abruptly at any time.
      </span>

      <div>
        <span>Market suggestions?</span>
        <a href="https://twitter.com/pepe">@pepe</a>
      </div>
    </div>
  )
}

