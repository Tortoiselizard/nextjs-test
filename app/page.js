'use client'

import GetCookie from '@/components/GetCookie/GetCookie'
import ConnectSSE from '@/components/ConnectSSE/ConnectSSE'

import { useState } from 'react'

function Home() {

  const [ connected, setConnected ] = useState(false)
  
  return (
    <>
      <h1>Hola mundo</h1>
      <GetCookie />
      <br></br>
      <br></br>
      <button onClick={() => {setConnected(true)}}>conectar</button>
      {
        connected && (
          <>
            <button onClick={() => {setConnected(false)}}>desconectar</button>
            <ConnectSSE />
          </>
        )
      }
    </>
  )
}

export default Home