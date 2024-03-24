'use client'

import { useState } from "react"

function connectWithAPI( place = '') {
    // return fetch('https://cookies-back.vercel.app/')
    return fetch(`https://cookies-back.vercel.app/${place}`, { credentials: 'include' })
    // return fetch(`http://localhost:3001/${place}`, { credentials: 'include' })
    // return fetch(`http://localhost:3001/${place}`)
        .then(data => data)
}

function GetCookie() {

    const [response, setResponde] = useState('')
    const [ cookie, setCookie ] = useState('')

    async function handleClick() {
        connectWithAPI()
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setResponde(data)
            })
    }

    async function handleCookie() {
        connectWithAPI('cookie')
            .then(response => {
                console.log('response:', response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                // setCookie(data)
            })
    }

    return (
        <>
            <button onClick={() => {handleClick()}}>Conectarte con la API</button>
            <br/>
            <label>Retorno del fetch: <span>{response}</span></label>
            <br/>
            <button onClick={() => {handleCookie()}}>Solicitar Cookie</button>
            <label>La cookie que recibí es: <span>{cookie}</span></label>
        </>
    )
}

export default GetCookie