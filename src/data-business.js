
function datosServidorLista () {
    return fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                return response.json();
            })
}

function datosServidorCharacter (id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => {
        return response.json();
    })
}

function datosServidorLocation (url)  {
        return fetch(url).then(response => {
            return response.json();
        }).then(data => {
            return data;
        })
}


export { datosServidorLista , datosServidorCharacter, datosServidorLocation }



