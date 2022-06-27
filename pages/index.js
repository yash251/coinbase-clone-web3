import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <div>
      <button onClick={() => connectWallet('')}>Connect Wallet</button>
    </div>
  )
}
