import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { WalletMessage } from './Wallet/WalletMessage';
import { WalletModal } from './Wallet/WalletModal';

function Account() {
  const { account } = useWeb3React()

  return (
    <>
      <span>Account</span>
      <span role="img" aria-label="robot">
        🤖
      </span>
      <span>
        {account === null
          ? '-'
          : account
          ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
          : ''}
      </span>
    </>
  )
}

export function WalletComponent() {
  const context = useWeb3React<Web3Provider>()
  const { active, error, account } = context
  const [showModal, setShowModal] = React.useState<boolean>(false)

  return (
    <>
    <h1 style={{ margin: '1rem', textAlign: 'right' }}>
      {
        active 
      ? <WalletMessage value={`🟢 ${account.substring(0, 6)}...${account.substring(account.length - 4)}`}/>
          : error
            ? <WalletMessage value={'🔴 Error while connecting'}/>
            : !showModal 
              ? <div onClick={() => setShowModal(true)}><WalletMessage value={'Connect to a wallet'}/></div>
              : <WalletModal/>
      }
    </h1>
    </>
  )
}
