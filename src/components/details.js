import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import eventService from '../services/events-service'

const Details = () => {
    const [event, setEvent] = useState({_embedded: {events: []}})
    const {id} = useParams()
    useEffect(() => {
        eventService.findEventById(id)
            .then(event => setEvent(event))
    }, [id])
    return(
        <div>
            {
                event && event._embedded && event._embedded.events && event._embedded.events[0] &&
                <>
                    <h1>{event._embedded.events[0].name}</h1>
                    <img src={event._embedded.events[0].images[0].url}/>
                    <h2>Description</h2>
                    <p>
                        {event._embedded.events[0].promoter.description}
                    </p>
                    <h2>Please Note</h2>
                    <p>
                        {event._embedded.events[0].pleaseNote}
                    </p>
                </>
            }
        </div>
    )
}

export default Details