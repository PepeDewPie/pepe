import React from 'react'

export function WalletMessage({value}: any) {
  return (
    <>
      <button
        className="connect-button"
      >
          <h4 className="connect-text">{value}</h4>
      </button>
    </>
  )
}
