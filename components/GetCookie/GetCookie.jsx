'use client'

import { useState } from "react"

const PATH_BACK = process.env.NEXT_PUBLIC_PATH_BACK

function connectWithAPI() {
    console.log('PATH_BACK:', PATH_BACK)
    return fetch(`${PATH_BACK}`, { credentials: 'include' })
        .then(data => data)
}

function requestCookie() {
    console.log('PATH_BACK:', PATH_BACK)
    return fetch(`${PATH_BACK}/cookie`, { credentials: 'include' })
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
        requestCookie()
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