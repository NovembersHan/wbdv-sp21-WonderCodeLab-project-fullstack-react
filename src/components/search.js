import React, {useState, useEffect} from 'react'
import eventService from '../services/events-service'
import {Link, useParams, useHistory} from "react-router-dom";

const Search = () => {
    const {city} = useParams()
    const [searchCity, setSearchCity] = useState("")
    const [results, setResults] = useState({_embedded: {events: []}})
    const history = useHistory()
    useEffect(() => {
        setSearchCity(city)
        if(city) {
            eventService.findEventByCity(city)
                .then(results => setResults(results))
        }
    }, [city])
    return(
        <div>
            <h1>Search</h1>
            <input
                onChange={(event) => {
                    setSearchCity(event.target.value)
                }}
                className="form-control"
                value={searchCity}/>
            <button
                onClick={() => {history.push(`/search/${searchCity}`)}}
                className="btn btn-primary btn-block">
                Search
            </button>
            <ul className="list-group">
                {
                    results._embedded.events.map(event =>
                        <li className="list-group-item" key={event.id}>
                            <Link to={`/details/${event.id}`}>
                                {event.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Search