'use client'

import Cookies from 'js-cookie'
import { useState, useEffect } from "react"

const PATH_BACK = process.env.NEXT_PUBLIC_PATH_BACK
const DOMINE = process.env.NEXT_PUBLIC_DOMINE

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

function addHeader() {
    console.log('PATH_BACK:', `${PATH_BACK}/addCustomHeader`)
    return fetch(`${PATH_BACK}/addCustomHeader`, {
        credentials: 'include',
        cache: 'no-store',
        method: 'POST'
    })
        .then(response => {
            const headers = response.headers
            for (const [key, value] of headers.entries()) {
                console.log(`${key}: ${value}`)
            }
            return response
        })
}

function sendRedirection() {
    console.log('PATH_BACK:', `${PATH_BACK}/redirectionToA`)
    return fetch(`${PATH_BACK}/redirectionToA`, { credentials: 'include', cache: 'no-store' })
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
                console.log('data:', data)
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

    async function addCustomHeader() {
        addHeader()
            .then(response => {
                console.log('response:', response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                // setCookie(data)
            })
    }

    async function requestWithRedirection() {
        sendRedirection()
            .then(response => {
                console.log('response:', response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                // setCookie(data)
            })
    }

    async function simulateAuth() {
        window.location.href = `${PATH_BACK}/simulateAuth`
    }

    async function simulateAuthNewTag() {
        window.open(`${PATH_BACK}/redirectionToA`, '_blanck')
        // window.open(`https://www.google.com/`, '_blanck')
    }

    function saveCookie() {
        // document.cookie = `myCookie=Cookie desde el front; Secure; SameSite=None; Path=/`
        document.cookie = `myCookie=Cookie desde el front; Secure; SameSite=None; Domain=${DOMINE}; Path=/`
    }

    return (
        <>
            <button onClick={() => {handleClick()}}>Conectarte con la API</button>
            <br/>
            <label>Retorno del fetch: <span>{response}</span></label>
            <br/>
            <button onClick={() => {saveCookie()}}>Guardar Cookie desde el front</button>
            <br/>
            <button onClick={() => {handleCookie()}}>Solicitar Cookie</button>
            <label>La cookie que recibí es: <span>{cookie}</span></label>
            <br/>
            <button onClick={() => {removeCookie()}}>Eliminar la Cookie</button>
            <label>La cookie que eliminé es: <span>{cookieRemoved}</span></label>
            <br/>
            <button onClick={() => {addCustomHeader()}}>Agregar header personalizado</button>
            <br/>
            <button onClick={() => {requestWithRedirection()}}>Solicitud con redirección</button>
            <br/>
            <button onClick={() => {simulateAuth()}}>Simular autenticación</button>
            <br/>
            <button onClick={() => {simulateAuthNewTag()}}>Simular autenticación en pestaña nueva</button>
        </>
    )
}

export default GetCookie