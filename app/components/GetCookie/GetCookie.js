'use client'

import { useState } from "react"

function getCookie() {
    return fetch('https://cookies-back.vercel.app/')
        .then(data => data)
}

function GetCookie() {

    const [response, setResponde] = useState('')

    async function handleClick() {
        getCookie().then(data => console.log('data:', data))
    }

    return (
        <>
            <button onClick={handleClick}>hacer un fetch</button>
            <br/>
            <label>Retorno del fetch:<span>{response}</span></label>
        </>
    )
}

export default GetCookie