export const findEventByCity = (city) =>
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&countryCode=US&apikey=KJGipMuB8hHaiUBD83HnV8VsnrZ5yXP7`)
        .then(response => response.json())

export const findEventById = (id) =>
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${id}&countryCode=US&apikey=KJGipMuB8hHaiUBD83HnV8VsnrZ5yXP7`)
        .then(response => response.json())

export default {
    findEventByCity,
    findEventById
}