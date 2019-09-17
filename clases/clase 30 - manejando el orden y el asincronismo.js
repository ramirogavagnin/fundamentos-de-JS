$(document).ready(() => {
    console.log('its ready')

    const API_URL = 'https://swapi.co/api/'
    const PEOPLE_URL = 'people/:id'

    const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
    const opts = { crossDomain: true }
    const onPeopleResponse = persona => console.log(`Hello Jedi! I'm ${persona.name}`)

    const obtenerPersonaje = (id, callback) => {
        const characterUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(characterUrl, opts, onPeopleResponse)

        if (callback) {
            callback()
        }
    }

    obtenerPersonaje(1, function() {
        obtenerPersonaje(2, function() {
            obtenerPersonaje(3, function() {
                obtenerPersonaje(4)
            })
        })
    })
})
