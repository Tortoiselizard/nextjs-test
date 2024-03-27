'use client'

import { useState, useEffect } from "react"

function ConnectSSE({ setConnected }) {

    const [ events, setEvents] = useState([])

    useEffect(() => {
        console.log('events:', events)
        if (events.length) setConnected(events[0])
    }, [events])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3002/sse')

        eventSource.addEventListener('open', () => {
          console.log('SSE opened!');
        });

        // usando eventSource.onmessage
        eventSource.onmessage = (event) => {
            // const data = JSON.parse(event.data)
            console.log('data:', event.data)
            setEvents(prevEvents => [...prevEvents, event.data])
        }

        // usando enventos personalizados
        eventSource.addEventListener = ( 'miEvento', (event) => {
            const eventData = JSON.parse(event.data)
            const mensaje = eventData.message
            setEvents(prevEvents => [...prevEvents, mensaje])
        })

        // const source = new EventSource('http://localhost:3002/');
    
        // source.addEventListener('open', () => {
        //   console.log('SSE opened!');
        // });
    
        // source.onopen = () => {
        //     console.log('SSE opened!')
        // }

        // source.addEventListener('message', (e) => {
        //   const data = JSON.parse(e.data);
        //   if(data[0]){
        //     setPairList(data[0]);
        //     setFetchList(true);
        //     return
        //   }
        //   setData(data);
        // });

        return () => {
            console.log('SSE closed')
            eventSource.close()
            // source.close()
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