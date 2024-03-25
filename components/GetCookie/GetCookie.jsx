'use client'

import Cookies from 'js-cookie'
import { useState, useEffect } from "react"

const PATH_BACK = process.env.NEXT_PUBLIC_PATH_BACK

function connectWithAPI() {
    console.log('PATH_BACK:', PATH_BACK)
    return fetch(`${PATH_BACK}`, { credentials: 'include', cache: 'no-store' })
        .then(data => data)
}

function requestCookie() {
    console.log('PATH_BACK:', `${PATH_BACK}/cookie`)
    return fetch(`${PATH_BACK}/cookie`, { credentials: 'include', cache: 'no-store' })
        .then(data => data)
}

function removeAllCookies() {
    console.log('PATH_BACK:', `${PATH_BACK}/noCookie`)
    return fetch(`${PATH_BACK}/noCookie`, { credentials: 'include', cache: 'no-store' })
        .then(data => data)
}

function GetCookie() {

    const [response, setResponde] = useState('')
    const [ cookie, setCookie ] = useState('')
    const [ cookieRemoved, setCookieRemoved ] = useState('')

    useEffect(() => {
        const myCookie = Cookies.get('myCookie')
        console.log('myCookie:', myCookie)
    }, [])

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

    async function removeCookie() {
        removeAllCookies()
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
            <br/>
            <button onClick={() => {removeCookie()}}>Eliminar la Cookie</button>
            <label>La cookie que eliminé es: <span>{cookieRemoved}</span></label>
        </>
    )
}

export default GetCookie