'use client'

import GetCookie from '@/components/GetCookie/GetCookie'
import ConnectSSE from '@/components/ConnectSSE/ConnectSSE'

import { useState, useEffect } from 'react'

function Home() {

  const [ user, setConnected ] = useState(false)
  
  // useEffect(() => {
  //   console.log('user:', user)
  // }, [user])

  return (
    <>
      <h1>Hola mundo</h1>
      <GetCookie />
      <br></br>
      <br></br>
      <button onClick={() => {setConnected(true)}}>conectar</button>
      <br/>
      <label>{ typeof user === 'string' ? user : ''}</label>
      {/* {
        user === true && (
          <>
            <button onClick={() => {setConnected(false)}}>desconectar</button>
            <ConnectSSE setConnected={setConnected}/>
          </>
        )
      } */}
    </>
  )
}

export default Home