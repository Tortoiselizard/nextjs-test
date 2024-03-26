'use client'

import { useState, useEffect } from "react"

function ConnectSSE() {

    const [ events, setEvents] = useState([])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3001/sse')

        eventSource.onmessage = (event) => {
            setEvents(prevEvents => [...prevEvents, event.data])
        }

        return () => {
            eventSource.close()
        }

    }, [])

    return (
        <div>
            <h1>Eventos SSE:</h1>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>
        </div>
    )
}

export default ConnectSSE